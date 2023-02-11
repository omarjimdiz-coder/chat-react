

export const patternTwo = (data, setNewText) => {
    //Negrita
    if(/[*]+[\s\a-zA-Z0-9]+[*]/.test(data.message)){
        const getText = /[*]+[\s\a-zA-Z0-9]+[*]/.exec(data.message);
        // console.log(getText[0]);
        setNewText(data.message.replace(/[*]+[\s\a-zA-Z0-9]+[*]/, `<span class="font-bold">${getText[0].slice(1, -1)}</span>`));
    }
    //Cursiva
    else if(/[_]+[\s\a-zA-Z0-9]+[_]/.test(data.message)){
        const getText = /[_]+[\s\a-zA-Z0-9]+[_]/.exec(data.message);
        // console.log(getText[0]);
        setNewText(data.message.replace(/[_]+[\s\a-zA-Z0-9]+[_]/, `<span class="italic">${getText[0].slice(1, -1)}</span>`));
    }
    // Line cruzada
    else if(/[~]+[\s\a-zA-Z0-9]+[~]/.test(data.message)){
        const getText = /[~]+[\s\a-zA-Z0-9]+[~]/.exec(data.message);
        // console.log(getText[0]);
        setNewText(data.message.replace(/[~]+[\s\a-zA-Z0-9]+[~]/, `<span class="line-through">${getText[0].slice(1, -1)}</span>`));
    }
    //tachado y negritas
    else if(/[*~][~*]+[\s\a-zA-Z0-9]+[~*][*~]/.test(data.message)){
        const getText = /[*~][~*]+[\s\a-zA-Z0-9]+[~*][*~]/.exec(data.message);
        // console.log(getText[0]);
        setNewText(data.message.replace(/[*~][~*]+[\s\a-zA-Z0-9]+[~*][*~]/, `<span class="line-through font-bold">${getText[0].slice(1, -1)}</span>`))
    }
    //cursiva y negritas
    else if(/[*_][_*]+[\s\a-zA-Z0-9]+[_*][*_]/.test(data.message)){
        const getText = /[*_][_*]+[\s\a-zA-Z0-9]+[_*][*_]/.exec(data.message);
        // console.log(getText[0]);
        setNewText(data.message.replace(/[*_][_*]+[\s\a-zA-Z0-9]+[_*][*_]/, `<span class="italic font-bold">${getText[0].slice(1, -1)}</span>`))
    }
    //cursiva y tachado
    else if(/[~_][_~]+[\s\a-zA-Z0-9]+[_~][~_]/.test(data.message)){
        const getText = /[~_][_~]+[\s\a-zA-Z0-9]+[_~][~_]/.exec(data.message);
        // console.log(getText[0]);
        setNewText(data.message.replace(/[~_][_~]+[\s\a-zA-Z0-9]+[_~][~_]/, `<span class="italic line-through">${getText[0].slice(1, -1)}</span>`))
    }
    //Texto normal
    else{
        setNewText(data.message);
    }
}