# Updated as of Aug 16, 2017
# FROM specified which image i want to download
# Needs to be provided before any other section of code.
FROM httpd:latest

#Author of the Docker File
# MAINTAINER Pictolearn Note: MAINTAINER has been deprecated for LABEL, 
# LABEL is a key value pair
LABEL "Maintainer"="SamTech"

# Copy the following directory
COPY www/ /usr/local/apache2/htdocs/siscov

# Copy httpd.conf with changes to the root directory
COPY docker/httpd.conf /usr/local/apache2/conf