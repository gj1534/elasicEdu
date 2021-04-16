package com.elastic.elasticDemo.configuration.dbConfig;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Bean
    public DataSource dataSource() {
        return DataSourceBuilder.create()
                .url("jdbc:sqlserver://bpdb.cfrzpc72i5pr.ap-northeast-2.rds.amazonaws.com:1433;DatabaseName=BIZPP_DEV")
                .driverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver")
                .username("bizppdev")
                .password("bizppmaster")
                .build();
    }

    @Bean
    public DataSourceTransactionManager transactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }
}
