import {NextResponse, NextRequest} from 'next/server'
import nodemailer from "nodemailer"

export const POST = async(req:NextRequest, res:NextResponse)=>{
    if(req.method !== 'POST'){
        return new NextResponse(JSON.stringify({message:'method not allowe'}),{status:400})
    }
    const {email, subject, message} = await req.json()
    const myEmail = process.env.EMAIL
    const myPass = process.env.PASS

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:myEmail,
            pass: myPass
        }
    })

    const mailOptions = {
        from: myEmail,
        to: myEmail,
        subject:subject,
        text: `From: ${email}\n\n${message}`
    }

    try{
        await transporter.sendMail(mailOptions)
        return new NextResponse(JSON.stringify({message:'Sent! Thanks for emailing me'}),{status:200})
    }catch(error){
        return new NextResponse(JSON.stringify({message:error}),{status:500})
    }
}