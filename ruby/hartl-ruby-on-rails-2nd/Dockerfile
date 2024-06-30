FROM corgibytes/ruby-1.9.3:1.0.0

# Create /development directory and set it as the working directory
WORKDIR /development

# Copy contents from host to /development in the container
COPY . .

# Install specific versions of gems compatible with Ruby 1.9.3
RUN gem install bundler -v 1.17.3 && \
    gem install rack-cache -v 1.6.1 && \
    gem install concurrent-ruby -v 1.1.9 && \
    gem install rails -v 3.2.3 && \
    gem bundle install

# Install Node.js 8.x (LTS) version, compatible with older Ruby versions
RUN curl -fsSL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs

# Append PATH configuration to bashrc
RUN echo 'export PATH="$PATH:/usr/local/bundle/bin"' >> ~/.bashrc \
    && source ~/.bashrc

# Set the entrypoint to bash
ENTRYPOINT ["/bin/bash", "-l"]
