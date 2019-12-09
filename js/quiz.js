const wrapper   = document.getElementById("quiz_wrapper");
const levels    = document.getElementById("levels");
const middle    = document.getElementById("image_wrapper");
const options   = document.getElementById("options");
const image     = document.getElementById("img_val");
const question  = document.getElementById("question");

const perguntas = ["Quem é esse personagem?", "Quem é esse personagem?", "Quem é esse personagem?", "Quem é esse personagem?", "Quem é esse personagem?"];
const imagenspr = ["https://www.dccomics.com/sites/default/files/field/image/LUCF_1_14_Col_900_5670cbae684e89.56103762.jpg", "https://assets1.inquiror.com/uploads/posts/images/db2413f3-99d9-400e-ac9f-8fb34e8740f8.jpg", "https://nerdist.com/wp-content/uploads/2019/10/Spectre_New_52_004-1200x676.png", "https://www.dccomics.com/sites/default/files/Eclipso_Marquee_5880087f409144.79330063.jpg", "https://s.aficionados.com.br/imagens/conheca-mister-mxyzptlk-o-cara-que-poderia-derrotar-o-superman_t.png"];
const opcoes    = ["Lucifer Morningstar;Cyclone;Tim Drake;Damian Wayne", "Ted Kord;Alfred Pennyworth;Michael Demiurgos;Wally West", "Green Arrow;Spectre;Kilowog;Sinistro", "Ragman;Barry Allen;Darkseid;Eclipso", "Mr. Mxyzptlk;Deathstroke;Ganthet;Etrigan"];
const respostas = ["1", "3", "2", "4", "1"];
const finalimg  = "https://www.wallpaperflare.com/static/1000/947/657/dc-comics-superhero-green-lantern-emotional-spectrum-wallpaper.jpg";

let curr_stage  = 0;
let loaded_opts = [];
let loaded_lvls = [];
let split_opts  = [];
let acertos     = 0;

function loadstage(num) {
    curr_stage = num;

    if (curr_stage == 6) {
        image.src = "";
        image.style.background = "url('"+finalimg+"')";
        image.style.backgroundSize  = "cover";
        image.style.opacity = "0.5";
        question.innerHTML = "<h1 id='finaltxt'>Você acertou " + acertos + "/5 do quiz!</h1>";
        document.getElementById("finaltxt").style.fontSize = "50px";
        document.getElementById("finaltxt").style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
        loaded_opts[0].innerHTML = "";
        loaded_opts[1].innerHTML = "";
        loaded_opts[2].innerHTML = "";
        loaded_opts[3].innerHTML = "";
    } else {
        image.src = imagenspr[num - 1];
        question.innerHTML = perguntas[num - 1];
        split_opts = opcoes[num - 1].split(";");
        loaded_lvls[curr_stage - 1].style.color = "#f6ff6f";

        for (i = 0; i < split_opts.length; i++) {
            loaded_opts[i].innerHTML = split_opts[i];
            loaded_opts[i].id = i + 1;
            loaded_opts[i].onclick = function () {
                check(this.id);
            }
        }
    }
}

function loadpage() {
    for (i = 1; i < 6; i++) {
        levels.innerHTML += "<div class='levelicon'>" + i + "</div>";

        if (i <= 4) {
            options.innerHTML += "<div class='optionicon'>Carregando...</div>";
        }
    }

    loaded_opts = document.getElementsByClassName("optionicon");
    loaded_lvls = document.getElementsByClassName("levelicon");

    loadstage(1);
}

function check(id) {
    if (id == respostas[curr_stage - 1]) {
        loaded_lvls[curr_stage - 1].style.color = "#7cff6f";
        acertos++;
        loadstage(curr_stage + 1);
    } else {
        loaded_lvls[curr_stage - 1].style.color = "#ff6f6f";
        loadstage(curr_stage + 1);
    }
}

loadpage();