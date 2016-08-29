

We are all familiar with the Apache webserver, it is indeed a great Http server, but like many other piece of software out there, it has its downside and performance wise it is not great for high traffic websites, unless you have an extremely powerful server with a lot of resources to spare.

Nginx is a free open source Http webserver; it is very powerful and full of features and most importantly, it is a high performance webserver.

In this tutorial you will learn how to install Nginx webserver on you Mac OS X with the help of Homebrew.

Homebrew is a great package manager for Mac OS X and can be easily installed.

Installing Homebrew
You can install Homebrew with a single command if you don’t already have it.

ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
Installing PHP 5.4 (with FPM)
You can search for available PHP formulas (In Homebrew formulas are equivalent to packages in aptitude)

brew search php
It will return a long list of php 5.2, 5.3, 5.4 packages. We need 5.4. Tap it using:

brew tap josegonzalez/php 
brew tap homebrew/dupes
Note: If you do not tap homebrew/dupes you will get Error: No available formula for zlib

You can also pass options like you do when compiling files under Linux, before you pass any parameter I suggest you look at your options with: 

brew options php54
Build it using:

brew install php54 --with-fpm  --with-imap  --without-apache --with-debug
It will take a while; you can verify the php & php-fpm version with php –v or php-fpm –v respectively.

Adding PHP-FPM to startup routine

Check that you have the exact plist filename in /usr/local/Cellar/php54/

cp /usr/local/Cellar/php54/5.4.20/homebrew-php.josegonzalez.php54.plist ~/Library/LaunchAgents/
Start PHP-FPM:

launchctl load -w ~/Library/LaunchAgents/homebrew-php.josegonzalez.php54.plist
Stop PHP-FPM:

launchctl unload -w ~/Library/LaunchAgents/homebrew-php.josegonzalez.php54.plist
Installing MySQL
Type in the command line:

brew install mysql --enable-debug
Adding MySQL to startup routine

Check that you have the exact plist filename in /usr/local/Cellar/mysql/

cp /usr/local/Cellar/mysql/5.6.13/homebrew.mxcl.mysql.plist ~/Library/LaunchAgents/
Start mysql:

launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
Stop mysql:

launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
Manual Start/Stop

Start mysql:

/usr/local/mysql/support-files/mysql.server start
Stop mysql:

/usr/local/mysql/support-files/mysql.server stop
See other options /usr/local/mysql/support-files/mysql.server -h 

Usage: mysql.server {start|stop|restart|reload|force-reload|status} [ MySQL server options ]
Changes to MySQL Config (optional)

For security

MySQL has a wizard tool which walk you through some security questions that might improve you server configuration. For instance you might want to change the root password and so on.

mysql_secure_installation
Installing Nginx
Type in the command line:

brew install nginx
Adding Nginx to startup routine

Check that you have the exact plist filename in /usr/local/Cellar/nginx/

cp /usr/local/Cellar/nginx/1.4.2/homebrew.mxcl.nginx.plist ~/Library/LaunchAgents/
Start nginx:

launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
Stop nginx:

launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
