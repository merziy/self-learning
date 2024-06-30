FROM corgibytes/ruby-1.9.3:1.0.0

# Create /development directory and set it as the working directory
WORKDIR /development

# Copy contents from host to /development in the container
COPY . .

# Install specific versions of gems
RUN gem install rack-cache -v 1.7.1 && \
    gem install bundler -v 1.17.3 && \
    gem install concurrent-ruby -v 1.1.9 && \
    gem install rails -v 3.2.3

# Append PATH configuration to bashrc
RUN echo 'export PATH="$PATH:/usr/local/bundle/bin"' >> ~/.bashrc \
  && source ~/.bashrc

# Set the entrypoint to bash
ENTRYPOINT ["/bin/bash", "-l"]
