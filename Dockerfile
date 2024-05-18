# Start with a base image containing Java runtime
FROM openjdk:21-jdk-alpine

# The application's jar file
ARG JAR_FILE=build/libs/*.jar

# Add the application's jar to the container
COPY ${JAR_FILE} app.jar

# Run the jar file
ENTRYPOINT ["java","-jar","/app.jar"]
