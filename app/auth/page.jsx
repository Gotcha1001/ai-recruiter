"use client"
import Image from 'next/image'
import React from 'react'
import SmokeEffectIndividual from '../components/SmokeEffects/SmokeEffectIndividual'
import VortexMandalaSmokeEffect from '../components/Mandalas/VortexMandalasSmokeEffect'
import { FcGoogle } from "react-icons/fc";
import { Button } from '../components/ui/button'
import TriangleMandalas from '../components/Mandalas/TriangleMandalas'
import TriangleMandalas3 from '../components/Mandalas/TriangleMandalas3'
import { supabase } from '@/services/SupabaseClient'

function Login() {

    // Used to Sign in with google

    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })

        if (error) {
            console.error('Error signing in with Google:', error.message)
        }
    }

    return (
        <div className='flex flex-col items-center  h-screen justify-center bg-gray-100 gradient-background2'>
            <SmokeEffectIndividual isVisible={true} />
            <VortexMandalaSmokeEffect />
            <TriangleMandalas />
            <TriangleMandalas3 />
            <div className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 gap-4 z-10'>
                <Image src={'/logo.jpg'} alt='Logo' height={400} width={200}
                    className='w-[250px] rounded-lg' />
                <div className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 gap-4 z-10'>
                    <Image src={'/login.jpg'} alt='Login' height={400} width={600}
                        className='rounded-lg w-[400px] h-[250px]'
                    />
                    <h2 className='text-2xl font-bold text-center mt-5 '>Welcome To AI Recruiter</h2>
                    <p className='text-center'>Sign In With Google Authentication</p>
                    <Button
                        onClick={signInWithGoogle}
                        variant="sex2"><FcGoogle />Login With Google</Button>
                </div>
            </div>
        </div>
    )
}

export default Login