package com.example.Niit_ecommerce_API.security;

import com.example.Niit_ecommerce_API.model.request.LoginRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    public static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationFilter.class);

    public AuthenticationFilter(AuthenticationManager manager) {
        super(manager);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        LOGGER.info("Login Successful");
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        LOGGER.info("Login Unsuccessful");
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        ObjectMapper objectMapper = new ObjectMapper();

        try{
            LoginRequest loginRequest = objectMapper.readValue(
                    request.getInputStream(),
                    LoginRequest.class
            );

            return getAuthenticationManager()
                    .authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    loginRequest.getEmail(),
                                    loginRequest.getPassword()
                            )
                    );
        }
        catch (IOException e){
            throw new RuntimeException(e);
        }
    }
}
