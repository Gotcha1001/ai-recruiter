

// 'use client';
// import { supabase } from '@/services/SupabaseClient';
// import React, { useContext, useEffect, useState } from 'react';
// import { UserDetailContext } from './context/UserDetailContext';

// function Provider({ children }) {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const createUserIfNotExists = async () => {
//             // 1. Get session
//             const { data: { session }, error: sessionError } = await supabase.auth.getSession();
//             if (sessionError || !session) {
//                 console.error("No session or error getting session", sessionError);
//                 return;
//             }

//             // 2. Get current user
//             const { data: { user: currentUser }, error: authError } = await supabase.auth.getUser();
//             if (authError || !currentUser) {
//                 console.error("Auth error or no user", authError);
//                 return;
//             }

//             // 3. Check if user exists in 'Users' table
//             const { data: existingUsers, error: fetchError } = await supabase
//                 .from('Users')
//                 .select('*')
//                 .eq('email', currentUser.email);

//             if (fetchError) {
//                 console.error("Error fetching users:", fetchError);
//                 return;
//             }

//             // 4. Create user if not exists
//             if (!existingUsers || existingUsers.length === 0) {
//                 const { data: insertData, error: insertError } = await supabase
//                     .from('Users')
//                     .insert([{
//                         name: currentUser.user_metadata?.name,
//                         email: currentUser.email,
//                         picture: currentUser.user_metadata?.picture
//                     }]);

//                 if (insertError) {
//                     console.error("Error creating user:", insertError);
//                 } else {
//                     console.log("User created:", insertData);
//                 }
//             } else {
//                 console.log("User already exists:", existingUsers);
//             }

//             // 5. Set user state
//             setUser(currentUser);
//         };

//         createUserIfNotExists();
//     }, []);

//     return <>
//         <UserDetailContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserDetailContext.Provider>
//     </>;
// }

// export default Provider;

// export const useUser = () => {
//     const context = useContext(UserDetailContext)
//     return context
// }


// 'use client';
// import { supabase } from '@/services/SupabaseClient';
// import React, { useContext, useEffect, useState } from 'react';
// import { UserDetailContext } from './context/UserDetailContext';

// function Provider({ children }) {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchOrCreateUser = async () => {
//             // 1. Get session
//             const { data: { session }, error: sessionError } = await supabase.auth.getSession();
//             if (sessionError || !session) {
//                 console.error("No session or error getting session", sessionError);
//                 return;
//             }

//             // 2. Get current user
//             const { data: { user: currentUser }, error: authError } = await supabase.auth.getUser();
//             if (authError || !currentUser) {
//                 console.error("Auth error or no user", authError);
//                 return;
//             }

//             // 3. Check if user exists in 'Users' table
//             const { data: existingUsers, error: fetchError } = await supabase
//                 .from('Users')
//                 .select('*')
//                 .eq('email', currentUser.email);

//             if (fetchError) {
//                 console.error("Error fetching users:", fetchError);
//                 return;
//             }

//             let fullUserData;

//             // 4. Create user if not exists
//             if (!existingUsers || existingUsers.length === 0) {
//                 const { error: insertError } = await supabase
//                     .from('Users')
//                     .insert([{
//                         name: currentUser.user_metadata?.name || '',
//                         email: currentUser.email,
//                         picture: currentUser.user_metadata?.picture || ''
//                     }]);

//                 if (insertError) {
//                     console.error("Error creating user:", insertError);
//                     return;
//                 }

//                 // 5. Fetch the newly inserted user
//                 const { data: insertedUser, error: refetchError } = await supabase
//                     .from('Users')
//                     .select('*')
//                     .eq('email', currentUser.email)
//                     .single();

//                 if (refetchError) {
//                     console.error("Error refetching inserted user:", refetchError);
//                     return;
//                 }

//                 fullUserData = insertedUser;
//             } else {
//                 fullUserData = existingUsers[0];
//             }

//             // 6. Set full user data from database
//             setUser(fullUserData);
//         };

//         fetchOrCreateUser();
//     }, []);

//     return (
//         <UserDetailContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserDetailContext.Provider>
//     );
// }

// export default Provider;

// export const useUser = () => {
//     const context = useContext(UserDetailContext);
//     return context;
// };


'use client';

import { supabase } from '@/services/SupabaseClient';
import React, { useContext, useEffect, useState } from 'react';
import { UserDetailContext } from './context/UserDetailContext';
import { useRouter, usePathname } from 'next/navigation';

function Provider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Set up auth state listener
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (event === 'SIGNED_OUT') {
                    setUser(null);
                    if (!pathname.includes('/auth')) {
                        router.push('/auth');
                    }
                } else if (event === 'SIGNED_IN' && session) {
                    await fetchUserData(session);
                }
            }
        );

        // Initial session check
        checkSession();

        return () => {
            if (authListener && typeof authListener.subscription?.unsubscribe === 'function') {
                authListener.subscription.unsubscribe();
            }
        };
    }, [router, pathname]);

    const checkSession = async () => {
        try {
            setLoading(true);
            const { data: { session } } = await supabase.auth.getSession();

            if (session) {
                await fetchUserData(session);
            } else {
                setUser(null);
                if (!pathname.includes('/auth')) {
                    router.push('/auth');
                }
            }
        } catch (error) {
            console.error("Error checking session:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const fetchUserData = async (session) => {
        try {
            const { data: currentUser } = await supabase.auth.getUser();

            if (!currentUser || !currentUser.user) {
                throw new Error("Could not get current user");
            }

            // Check if user exists in database
            const { data: existingUsers, error: fetchError } = await supabase
                .from('Users')
                .select('*')
                .eq('email', currentUser.user.email);

            if (fetchError) throw fetchError;

            let fullUserData;

            if (!existingUsers || existingUsers.length === 0) {
                // Create new user record
                const { error: insertError } = await supabase
                    .from('Users')
                    .insert([{
                        name: currentUser.user.user_metadata?.name || '',
                        email: currentUser.user.email,
                        picture: currentUser.user.user_metadata?.picture || ''
                    }]);

                if (insertError) throw insertError;

                // Fetch the newly created user
                const { data: newUser, error: refetchError } = await supabase
                    .from('Users')
                    .select('*')
                    .eq('email', currentUser.user.email)
                    .single();

                if (refetchError) throw refetchError;
                fullUserData = newUser;
            } else {
                fullUserData = existingUsers[0];
            }

            setUser(fullUserData);

            // Redirect to dashboard if on login page
            if (pathname === '/auth') {
                router.push('/dashboard');
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            setUser(null);
        }
    };

    return (
        <UserDetailContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserDetailContext.Provider>
    );
}

export default Provider;

export const useUser = () => {
    const context = useContext(UserDetailContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserDetailContext.Provider');
    }
    return context;
};