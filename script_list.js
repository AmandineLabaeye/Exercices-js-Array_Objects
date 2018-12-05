var arrObj = [

    {
        "person": "Mark",
        "age": 25,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"
    },
    {
        "person": "Bill",
        "age": 65,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"
    },
    {
        "person": "Spencer",
        "age": 34,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"
    }

];

for (let i = 0; i < arrObj.length; i++) {

    let Avatar = document.createElement("img");

    document.body.appendChild(Avatar);

    Avatar.id = "Avatar" + i;

    let NomAge = document.createElement("div");

    document.body.appendChild(NomAge);

    NomAge.id = "NomAge" + i;

    $("#Avatar" + i).attr("src", arrObj[i].avatar).css({
        display : "inline-block",
        position : "relative",
        marginTop : "5%",
        marginLeft : "10%"
    });

    $("#NomAge" + i).html(arrObj[i].person + "<br> (" + arrObj[i].age + " ans)").css({
        display : "inline-block",
        position : "relative",
        textAlign : "center"
    });


}