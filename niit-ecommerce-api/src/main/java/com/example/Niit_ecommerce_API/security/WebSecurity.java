package com.example.Niit_ecommerce_API.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurity {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        AuthenticationManager manager = http
                .getSharedObject(AuthenticationManagerBuilder.class)
                .build();

        AuthenticationFilter authenticationFilter = new AuthenticationFilter(manager);

        return http
                .authorizeHttpRequests(request -> request
                        .requestMatchers("/login").permitAll()
                )
                .addFilter(authenticationFilter)
                .authenticationManager(manager)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .cors(cors -> cors.disable())
                .csrf(csrf -> csrf.disable())
                .getOrBuild();
    }
  }
