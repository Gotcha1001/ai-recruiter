"use client"
import FeatureMotionWrapper from "@/app/components/FramerMotion/FeatureMotionWrapperMap"
import VortexMandalaSmokeEffect from "@/app/components/Mandalas/VortexMandalasSmokeEffect"
import SmokeEffectIndividual from "@/app/components/SmokeEffects/SmokeEffectIndividual"
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarOptions } from "@/services/Constants"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LogoutButton from "./LogoutButton"

export function AppSidebar() {


    const path = usePathname()
    console.log("path", path)

    return (
        <Sidebar className="gradient-background2">
            {/* <VortexMandalaSmokeEffect /> */}
            <SmokeEffectIndividual isVisible={true} />
            <SidebarHeader className="flex flex-col items-center justify-center z-10">
                <Link href={'/'} >
                    <Image src={'/logo.jpg'} alt="Logo" height={200} width={200}
                        className=" w=[100px] rounded-lg z-10" />
                </Link>

                <Button variant="sex2" className="w-full"> <Plus />Create New Interview</Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarContent>
                        <SidebarMenu className="flex gap-4">
                            {SidebarOptions.map((option, index) => (
                                <FeatureMotionWrapper key={index} index={index}>
                                    <SidebarMenuItem className={` bg-indigo-800 rounded-lg ${path == option.path && 'bg-gradient-to-r from-indigo-800 via-purple-950 to-black border '} `}>
                                        <SidebarMenuButton className="hover:bg-gradient-to-r from-indigo-600 via-purple-900 to-black hover:text-white p-4" asChild>
                                            <Link href={option.path}>
                                                <option.icon className="text-white z-10" />
                                                <span className={`text-white z-10 text-[16px] ${path == option.path && 'font-bold'} `}>{option.name}</span>
                                            </Link>

                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </FeatureMotionWrapper>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>

            </SidebarContent>
            <SidebarFooter className="p-4 border-t border-gray-700">
                <div className="w-full flex justify-center hover:scale-105 transition-all">
                    <LogoutButton />
                </div>
            </SidebarFooter>


        </Sidebar>
    )
}

export default AppSidebar