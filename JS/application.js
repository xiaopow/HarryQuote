$(document).ready(function(){
  var quotes = [
    "Nothing is Ever Random. - Harry Chen 2015",
    "I need beaver - Harry Chen 26/03/2015",
    "Demo or Die - Harry",
    "I need Bieber - Harry Chen",
    "I've never heard of it - Harry Chen",
    "You have to fork the repo and clone it in your computer - Harry",
    "What did I just see? - Harry",
    "Do you have a confession? - Harry",
    "Don't GOX me bro! - Harry #classic",
    "Yesterday is gone, but today is up for for grabs. - Harry Chen",
    "Have you forked today? - Harry Chen #fakeharryquotes",
    "Can I quickly interject? - MDA",
    "A lot of you has been trying to get some action through clicking - HC",
    "I wanna buy a lot of Fer today - HC",
    "You go, TIGER! - Dom to Victoria",
    "I tried. It's NEVER going to work for me - Ken",
    "I AM Harry Potter - Harry Chen #fakeharryquotes",
    "This is some geeky fun - MDC",
    "That's not what Jobs said - HC",
    "What ? Are we gambling here? - HC",
    "Oh, there's something to fork? - XLS",
    "That I can do. I don't even need eval - MDC",
    "Where's your javascript? - Harryscript",
    "Cloning is encouraged! - HC",
    "I'm going to get my fork. It's in the trash. - Xiao",
    "Harry === Geeky - HC 1/4/2015",
    "Xavi just blew my mind - Elia <br/> wait.. when did I blow someone? - XLS",
    "I don't sweat. Ever - XLS",
    "This is ridiculous what they are suggesting - Victoria referring to codeclimate",
    "Strawpedo is actually pretty good - Michael",
    "If you ever have a daughter.....  -Xiao..... Uhhhhhhhhhhh",
    "...I'll ruin her before you can find me... - xiao",
    "I KNOW WHO'S COMING TO  MY FUNERAL - Xiao",
    "that's what she said - Xiao",
    "why would she say that?? - Michael",
    "SO much sausage.... What do we(I) even do here... The sausage has exploded.... Oh wow that's good hmmmm mmmmmm - Dom",
    "I want to get real seriously deep tonight - Dom",
    "it's all in the back hand - Dom, 'the beast' dunnet",
    "Do you want me to hold it for you do you can do it with two hands? - Dimple",
    "When programmers see an INFINITE amount of forms to access a government, they are like: GG - Harry Chen",
    "You Are Being Smart Today - The DOM.",
    "This was Distracting (Points to [Dom's] Balls) - HC",
    "So far you've all been consuming from my backend - HC",
    "I got rickroll'ed! I got rickroll'ed! - Xiao",
    "WOAAH - Mia",
    "Omg! Did it go to Mars? OMG! Did I go to Mars? - HC",
    "I'm not EVEN joking - HC",
    "WoW - HC",
    "෴ -HC"
  ];

  var totalClick = 0;

  function postQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomQuote];
    $('#quote').text(quote);
  };

  $(document).on('click','#astro',function(){
    postQuote();
    totalClick++;

    if (totalClick > 100) {
      alert("100 clicks");
    }
  });

  $(document).on('mouseover','#astro',function(){
    $(this).attr('src','assets/astro-hover.png')
  });

  $(document).on('mouseout','#astro',function(){
    $(this).attr('src','assets/astro.png')
  });

});