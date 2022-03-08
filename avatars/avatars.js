

function loadAvatar(){

var Avatar =   Array()
Avatar.push("png-transparent-avatar-horror-monster-illustration-horror-avatar-template-head-fictional-character-thumbnail.png")
Avatar.push("png-transparent-avatar-hulk-avatar-head-user-avatars-illustration-thumbnail.png")
Avatar.push("png-transparent-cartoon-halloween-illustration-horror-avatar-photography-poster-head-thumbnail.png")
Avatar.push("png-transparent-classdojo-avatar-youtube-others-english-orange-smiley-thumbnail.png")
Avatar.push("png-transparent-classdojo-monster-avatar-dojo-monster-s-leaf-computer-smiley-thumbnail.png")
Avatar.push("png-transparent-classdojo-student-teacher-classroom-monster-purple-mammal-cat-like-mammal-thumbnail-1.png")
Avatar.push("png-transparent-classdojo-student-teacher-classroom-monster-purple-mammal-cat-like-mammal-thumbnail.png")
Avatar.push("png-transparent-computer-icons-tagpro-avatar-icon-design-avatar-face-heroes-snout-thumbnail.png")
Avatar.push("png-transparent-emoticon-smiley-computer-icons-monster-monster-monsters-sad-smiley-smiley-face-icon-purple-face-violet-thumbnail.png")
Avatar.push("png-transparent-emoticon-smiley-yellow-brown-monsters-57-face-smiley-online-chat-thumbnail.png")
Avatar.push("png-transparent-emoticon-smiley-yellow-facial-expression-brown-monsters-14-smiley-emoticon-internet-forum-thumbnail.png")
Avatar.push("png-transparent-emoticon-yellow-beak-smile-brown-monsters-46-smiley-online-chat-emoticon-thumbnail.png")
Avatar.push("png-transparent-football-player-cartoon-girl-women-play-game-holidays-women-accessories-thumbnail.png")
Avatar.push("png-transparent-granblue-fantasy-gray-wolf-monster-illustration-wolf-monster-game-animals-carnivoran-thumbnail.png")
Avatar.push("png-transparent-halloween-avatars-ghost-monsters-scary-spooky-fear-mummy-pumpkin-jack-o-lantern-thumbnail.png")
Avatar.push("png-transparent-halloween-monster-material-happy-halloween-face-festive-elements-thumbnail.png")
Avatar.push("png-transparent-ilustradores-argentinos-iglesia-del-dios-viviente-visual-arts-age-of-enlightenment-illustration-monster-avatar-heroes-poster-illustrator-thumbnail.png")
Avatar.push("png-transparent-michael-myers-computer-icons-emoticon-avatar-ghosts-and-monsters-thumbnail.png")
Avatar.push("png-transparent-mike-wazowski-james-p-sullivan-roz-monsters-inc-mike-wazowsk-vertebrate-fictional-character-pixar-thumbnail.png")
Avatar.push("png-transparent-monster-computer-icons-ghost-godzilla-monster-silhouette-haunted-house-avatar-thumbnail.png")
Avatar.push("png-transparent-monster-desktop-monster-inc-leaf-heart-grass-thumbnail.png")
Avatar.push("png-transparent-monster-smiley-avatar-alien-relaxing-purple-violet-smiley-thumbnail.png")
Avatar.push("png-transparent-pinhead-computer-icons-hellraiser-avatar-youtube-toothpaste-miscellaneous-heroes-toothpaste-thumbnail.png")
Avatar.push("png-transparent-sina-weibo-cuteness-avatar-moe-cartoon-holding-a-loving-monster-love-painted-hand-thumbnail.png")
Avatar.push("png-transparent-smile-yellow-beak-icon-brown-monsters-49-face-smiley-online-chat-thumbnail.png")
console.log("avatar")

 var image="" , avatarHTML="", tempHTML=""
 
 for(var i=0; i< Avatar.length ; i++){
    console.log( "i="+ i)
    image = Avatar[i]
    tempHTML = '<img class="avatar" src="'    
    tempHTML += "avatars/monster/"+ image
    tempHTML += '"'
    tempHTML += ">"
   
    avatarHTML += tempHTML
}


//document.getElementById("AvatarList").innerHTML = avatarHTML + tempHTML

document.getElementById("MonsterList").innerHTML = avatarHTML + tempHTML
//document.getElementById("memberList").innerHTML = tableHTML + eventHTML

}

loadAvatar("monster")