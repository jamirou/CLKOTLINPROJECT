package com.jobsearch.controller

import com.jobsearch.dto.JwtResponse
import com.jobsearch.dto.LoginRequest
import com.jobsearch.dto.UserRequestDTO
import com.jobsearch.service.AuthService
import jakarta.transaction.Transactional
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.web.bind.annotation.*
import java.net.URI

@RestController
@RequestMapping("/api/v1/auth")
class AuthController(
    private val authService: AuthService) {

    @Transactional
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    fun register(@RequestBody @Valid userRequestDto: UserRequestDTO): ResponseEntity<Void> {
        authService.register(userRequestDto)
        return ResponseEntity.created(URI.create("/api/v1/auth/register")).build()
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    fun authenticateUser(@RequestBody @Valid loginRequest: LoginRequest): ResponseEntity<*> {
        return try {
            val jwt = authService.authenticate(loginRequest.username, loginRequest.password)
            ResponseEntity.ok(JwtResponse(jwt))
        } catch (ex: BadCredentialsException) {
            ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.")
        }
    }
}
