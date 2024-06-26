package com.jobsearch.dto

import jakarta.validation.constraints.NotBlank
import java.time.*

data class InvitationDTO(
    val id: Int?,

    // Receiver
    var candidateId: Int?,
    val candidateIds: List<Int>?,

    // Invitation details
    @get:NotBlank(message = "Subject must not be blank")
    val subject: String,
    @get:NotBlank(message = "Content must not be blank")
    var content: String,
    var sentDateTime: LocalDateTime?,
    var sent: Boolean = false,

    // Sender
    val managerId: Int?,
    val vacancyId: Int? = null,
)

