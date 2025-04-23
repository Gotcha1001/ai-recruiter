// // components/LogoutButton.jsx
// "use client";


// import { Button } from '@/components/ui/button';
// import { supabase } from '@/services/SupabaseClient';

// import { LogOut } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// function LogoutButton() {
//     const router = useRouter();

//     const handleLogout = async () => {
//         const { error } = await supabase.auth.signOut();
//         if (error) {
//             console.error('Error signing out:', error);
//         } else {
//             // Force a refresh to clear any cached state
//             router.push('/auth');
//             // Force hard refresh
//             router.refresh();
//         }
//     };

//     return (
//         <Button
//             onClick={handleLogout}
//             variant="outline"
//             size="sm"
//             className="flex items-center gap-2"
//         >
//             <LogOut size={16} /> Logout
//         </Button>
//     );
// }

// export default LogoutButton;



// components/LogoutButton.jsx
"use client";

import { Button } from '@/components/ui/button';
import { supabase } from '@/services/SupabaseClient';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LogoutButton() {
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        try {
            setIsLoggingOut(true);
            // Sign out from Supabase
            const { error } = await supabase.auth.signOut();

            if (error) {
                console.error('Error signing out:', error);
                return;
            }

            // Use window.location for a hard redirect instead of Next.js router
            window.location.href = '/auth';

            // The line below won't execute due to the page reload above
            // but included as a fallback
            router.push('/auth');

        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <Button
            onClick={handleLogout}
            variant="sex2"
            size="sm"
            disabled={isLoggingOut}
            className="flex items-center gap-2 hover:bg-indigo-500"
        >
            <LogOut size={16} /> {isLoggingOut ? 'Logging out...' : 'Logout'}
        </Button>
    );
}

export default LogoutButton;