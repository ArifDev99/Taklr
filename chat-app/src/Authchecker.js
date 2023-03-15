import React from 'react'

export default function Authchecker() {

    const token =localStorage.getItem("accessToken")
    if (token){
        return true
    }
    else {

        return false
    }
}
