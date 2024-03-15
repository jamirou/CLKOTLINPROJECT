package com.jobsearch.repository

import com.jobsearch.dto.Candidate
import com.jobsearch.dto.CandidateSearchFilterDTO
import com.jobsearch.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.util.*

interface UserRepository : JpaRepository<User, Int> {
    fun findByEmail(email: String): Optional<User>

}
