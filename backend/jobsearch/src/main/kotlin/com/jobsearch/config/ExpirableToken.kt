package com.jobsearch.config

import org.springframework.stereotype.Component
import java.security.SecureRandom
import java.time.Duration
import java.time.Instant

@Component
class ExpirableToken {
    private val random = SecureRandom()
    fun generateExpirableToken(expirationDuration: Duration): String {
        val expirationTime = Instant.now().plus(expirationDuration).toEpochMilli()
        val randomString = generateRandomString(16)
        return "$expirationTime:$randomString"
    }
    private fun generateRandomString(length: Int): String {
        val chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        return (1..length)
            .map { chars[random.nextInt(chars.length)] }
            .joinToString("")
    }
    fun isExpired(token: String): Boolean {
        val parts = token.split(":")
        if (parts.size != 2) return true
        val expirationTime = parts[0].toLongOrNull() ?: return true
        return Instant.now().toEpochMilli() > expirationTime
    }
}