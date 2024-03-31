package com.jobsearch.service

import jakarta.mail.MessagingException
import jakarta.mail.internet.MimeMessage
import org.springframework.mail.MailException
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.stereotype.Service
import org.thymeleaf.context.Context
import org.thymeleaf.spring6.SpringTemplateEngine

@Service
class EmailService(private val mailSender: JavaMailSender, private val templateEngine: SpringTemplateEngine) {

    @Throws(MailException::class, MessagingException::class)
    fun sendEmail(to: String, subject: String, content: String, name: String = "Karl Jensen") {
        val context = Context()

        context.setVariable("name", name)
        context.setVariable("sender", to)
        context.setVariable("content", content)

        val processedHtml = templateEngine.process("emailTemplate", context)
        try {
            val mimeMessage: MimeMessage = mailSender.createMimeMessage()
            val helper = MimeMessageHelper(mimeMessage, false, "utf-8")
            helper.setTo(to)
            helper.setSubject(subject)
            helper.setText(processedHtml, true)

            mailSender.send(mimeMessage)
            println("Email sent successfully to $to")
        } catch (ex: Exception) {
            println("Failed to send email to $to: ${ex.message}")
            throw ex
        }
    }
}