"use client"

import { useOrganizationList } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import { use, useEffect } from "react"

// This component is designed to control the active organization in an application,
// so if you copy and past a manual organization id into the URL, 
// it will automatically change
export const OrgControl = () => {
    const params = useParams()
    const {setActive} = useOrganizationList()

    useEffect(() => {
        if(!setActive) return
        setActive({
            organization: params.organizationId as string
        })
    }, [setActive,params.organizationId])

    return null
}