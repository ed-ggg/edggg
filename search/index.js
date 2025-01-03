const newPlanetDivs = document.querySelectorAll('.new-planet-card img');
const h2Array = document.querySelectorAll('.new-planet-card h2');

newPlanetDivs.forEach((div, i) => {
    div.addEventListener('mouseover', e => {
        h2Array[i].style.color = '#00FF00';
    })
})

newPlanetDivs.forEach((div,i) => {
    div.addEventListener('mouseout', e => {
        h2Array[i].style.color = '';
    })
})

let allGGGs = [
    'Blaa Hype TF-V d3-144 3',
    'Bleia Dryiae HF-W b35-1 2',
    'Bleia Dryoae UV-C c29-52 3',
    'Blu Thua IS-B c13-6 2',
    'Blua Hypa HT-F d12-1226 12',
    'Boekh AO-H b27-33 1',
    'Boelts QJ-Y d1-1149 5',
    'Boelts XH-C c29-854 AB 1',
    'Braisoo HD-Q d6-11 9',
    'Byoi Aewsy RZ-F d11-104 1',
    'Byoomao JC-B d1-3681 3',
    'Byoomao LY-G d11-9374 A 4',
    'Byoomi XE-X d2-7844 4',
    'Col 285 Sector VU-M c8-1 4',
    'Cryaa Ain ZJ-R e4-4 A 3',
    'Dryoea Prao FH-S d5-3063 9',
    'Dryooe Flyou XS-Z c14-199 4',
    'Dryooe Groa QX-F c16 A 7',
    'Dryooe Prou FF-Z d696 5',
    'Eafoff LN-Q d6-0 1',
    'Eimbaith LW-W e1-290 7',
    'Eodgorph LM-W e1-167 BCD 8',
    'Eol Prou KW-L c8-32 4',
    'Eor Aowsy GR-W e1-1381 AB 1',
    'Eos Aowsy FG-Y d747 BC 4',
    'Eowyg Ail DR-V d2-0 A 1',
    'Floasly TE-X d2-25 B 1',
    'Floawns FX-L b36-24 1',
    'Flyiedge KA-V b8-5 3',
    'Flyue Bloae QN-Y c2-0 C 1',
    'Gludgoea AA-A e25 ABCD 3',
    'Gongae QW-L c24-0 2',
    'Graea Hypue BX-U b6-0 AB 3',
    'Hypao Chraea VQ-T d4-8 B 1',
    'Lysoovsky BH-L d8-26 3',
    'Noijo YG-T d4-97 A 1',
    'Nyeajaae IT-M c9-19 3',
    'Nyuena AC-B d14-245 7',
    'Oochody AA-Y c17-1 2',
    'Pheia Aewsy LV-Y d11 B 4',
    'Plaa Ain YH-G b13-0 A 8',
    'Plieliae SM-C c29-11 B 3',
    'Ploi Thua AY-T b3-0 2',
    'Praea Euq VP-M c21-1 1',
    'Pro Flee UY-Q c18-0 2',
    'Pru Thae BF-C c27-1 1',
    'Pyroifoea SS-Y b15-0 11',
    'Shaulai DL-P d5-274 7',
    'Slegi DH-J d10-27 5',
    'Squern AF-N c21-0 4',
    'Synookio EI-J d9-1 7',
    'Syrive KR-W d1-144 6',
    'Syrivu AN-M c7-2 3',
    'Thaileia PJ-O d7-74 D 3',
    'Vegnao PA-S c6-43 3',
    'Wembaei UM-A b57-4 1',
    'Wregoe ND-Z d1-0 C 7'
];

const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = () => {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result= allGGGs.filter((ggg) => {
            return ggg.toLowerCase().includes(input.toLowerCase());
        });
        
    }
    display(result);
    if(!result.length) {
        resultsBox.innerHTML='';
    }
}

const display = result => {
    const content = result.map((list)=> {
        return '<li onclick=selectInput(this)>' + list + '</li>';
    });
    resultsBox.innerHTML = '<ul>' + content.join('') + '</ul>';
}

const selectInput = list => {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
