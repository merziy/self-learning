require 'yaml'

bot_data = {
  :presubs => [
    ["dont", "don't"],
    ["youre", "you're"],
    ["love", "like"],
    ["apologize", "are sorry"],
    ["dislike", "hate"],
    ["despise", "hate"],
    ["yeah", "yes"],
    ["mom", "family"],
  ],

  :responses => {
    :default => [
      "I don't understand",
      "What?",
      "Huh?",
      "Tell me about something else.",
      "I'm tired of this. Change the subject.",
    ],
    :greeting => [
      "Hi, i'm [name]. Want to chat?",
      "What's on your mind today?",
      "Hi. What do you want to talk about?"
    ],
    :farewell => [
      "Good bye!",
      "Au revoir!",
    ],
    "hello" => [
      "How's it going?",
      "How do you do?",
      "Enough of the pleasantries!"
    ],
    "sorry" => [
      "There is no need to apologize."
    ],
    "different" => [
      "How is it different?",
      "What changed?"
    ],
    "everyone *" => [
      "You think everyone *?"
    ],
    "do not know" => [
      "Are you always so indecisive?"
    ],
    "yes" => [
      "At least you are positive about something!",
      "Great."
    ],
    "family" => [
      "Tell me about your family",
    ],
    "you are *" => [
      "What makes you think I am *?",
      "Are you so sure I am *?"
    ],
    "i am *" => [
      "Is it normal for you to be *?",
      "Do you like being *?",
    ],
    "i do not *" => [
      "Why don't you *?"
    ],
    "what" => [
      "Why do you ask?",
      "Why?",
      "I don't know. Do you?"
    ],
    "no" => [
      "Really?",
      "Fair enough."
    ],
    "why does *" => [
      "I don't know why *",
      "Do you already know the answer?"
    ],
    "why can't i *" => [
      "Do you want to *?"
    ],
    "why can't you *" => [
      "Do you want me to *?"
    ],
    "hates *" => [
      "Why do you think they hate *?"
    ],
    "hate *" => [
      "Why don't you like *?",
      "Why the dislike of *?",
    ],
    "i like *" => [
      "Why do you like *?",
      "Wow! I like * too!",
    ],
  }
}

# puts bot_data.to_yaml

File.open(ARGV.first || "bot_data.yml", "w") { |file| file.write(bot_data.to_yaml) }
