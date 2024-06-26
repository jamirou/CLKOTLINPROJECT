package com.jobsearch.integration.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.jobsearch.dto.UserRequestDTO
import com.jobsearch.entity.Role
import com.jobsearch.entity.User

import com.jobsearch.repository.UserRepository
import com.jobsearch.repository.VacancyRepository

import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.post

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("test")
class UserControllerIntgTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @Autowired
    lateinit var userRepository: UserRepository

    @Autowired
    lateinit var vacancyRepository: VacancyRepository

    @Autowired
    lateinit var objectMapper: ObjectMapper

    lateinit var userEntity: User
    lateinit var userRequest: UserRequestDTO
    lateinit var admin1: User

    companion object {

        val ADMIN_1 = User(
                id = null,
                firstName = "Admin",
                lastName = "Admin",
                password = "test123",
                email = "admin@admin",
                role = Role(3, "admin")
        )


        val USER_ENTITY = User(
                id = 1,
                firstName = "Saul",
                lastName = "Olguin",
                password = "test123",
                email = "saul@saul",
                role = Role(2, "candidate")
        )

        val USER_REQUEST =  USER_ENTITY.let {
            UserRequestDTO(
                    id = 1,
                    firstName = it.firstName,
                    lastName = it.lastName,
                    email = it.email,
                    password = it.password,
                    roleId = it.role!!.id
            )
        }
    }


    @BeforeEach
    fun setUp() {
        // Delete all records from the repository
        vacancyRepository.deleteAll()
        userRepository.deleteAll()

        // Save the admin mock object
        admin1 = userRepository.save(ADMIN_1)

        // Assign the user entity and user request mock objects
        userEntity = USER_ENTITY
        userRequest = USER_REQUEST


    }

    @Test
    @WithMockUser(username = "admin@admin", authorities = ["admin"])
    fun `should create a new user`() {
        // When creating a new user
        val response = mockMvc.post("/api/v1/users/create") {
            contentType = MediaType.APPLICATION_JSON
            content = objectMapper.writeValueAsString(userRequest)
        }

        // Then the user should be created
        response
                .andExpect {
                    status { isCreated() }
                    content { contentType(MediaType.APPLICATION_JSON) }
                }
    }
}