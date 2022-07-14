// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery" 
import "@rails/ujs"
import "semantic-ui"


$('.message .close').on('click', function() {
$(this).closest('.message').transition('fade');});