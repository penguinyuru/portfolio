$(".contentBoxAboutMe").hide()
$(".contentBoxProgramingSkill").hide()
$(".contentOtherSkill").hide()
$(".contentFrontEndWork").hide()
$(".contentDesignAndIllustration").hide()
$(".contentVideoAndWriting").hide()
$(".contentMore").hide()

$(".logo").click(function(){
  $(".contentBoxAboutMe").slideUp()
  $(".contentBoxProgramingSkill").slideUp()
  $(".contentOtherSkill").slideUp()
  $(".contentFrontEndWork").slideUp()
  $(".contentDesignAndIllustration").slideUp()
  $(".contentVideoAndWriting").slideUp()
  $(".contentMore").slideUp()
  $(".titleMore").addClass("titleBdrs")
})

$(".titleAboutMe").click(function(){
  $(".contentBoxAboutMe").slideToggle("slow")
})

$(".titleProgramingSkill").click(function(){
  $(".contentBoxProgramingSkill").slideToggle("slow")
})

$(".titleOtherSkill").click(function(){
  $(".contentOtherSkill").slideToggle("slow")
})

$(".titleFrontEndWork").click(function(){
  $(".contentFrontEndWork").slideToggle("slow")
})

$(".titleDesignAndIllustration").click(function(){
  $(".contentDesignAndIllustration").slideToggle("slow")
})

$(".titleVideoAndWriting").click(function(){
  $(".contentVideoAndWriting").slideToggle("slow")
})

$(".titleMore").click(function(){
  $(".titleMore").toggleClass("titleBdrs")
  $(".contentMore").slideToggle("slow")
})

$(".collapseBtnDesignAndIllustration").click(function(){
  $(".contentDesignAndIllustration").slideUp()
})

$(".collapseBtnVideoAndWriting").click(function(){
  $(".contentVideoAndWriting").slideUp()
})

$(".collapseBtnFrontEndWork").click(function(){
  $(".contentFrontEndWork").slideUp()
})

$(".collapseBtnProgramingSkill").click(function(){
  $(".contentBoxProgramingSkill").slideUp()
})

$(".collapseBtnOtherSkill").click(function(){
  $(".contentOtherSkill").slideUp()
})