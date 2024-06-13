chapterlist = {
    '11':{
        'Maths':['Ch-1 Sets Numbers & Intervals', 'Ch-2 Fundamentals of Algebra', 'Ch-3 Quadratic Equation', 'Ch-4 Logarithm'],
        'Physics':['Ch-1 Units&Dimension, Basic Maths and Vector', 'Ch-2 Kinematics-1D and Calculus', 'Ch-3 Kinematics-2D', 'Ch-4 Newton\'s Laws of motion & Friction'],
        'Chemistry':['Ch-1 Quantum Number', 'Ch-2 Periodic Table', 'Ch-3 Chemical Bonding'],
        'Biology':['Ch-1 Cell The unit of Life'],
        'English':['Not Available!']
    }
}
notebooklist = {
    '11':{
        'Maths':['Notebook-1', 'Notebook-2'],
        'Physics':['Notebook-1', 'Notebook-2'],
        'Chemistry':['Notebook-1', 'Notebook-2'],
        'Biology':['Notebook-1'],
        'English':['Not Available!']
    }
}
let width = window.innerWidth;
let height = window.innerHeight;
if (width / height < 1) {
    document.getElementById('css').href = 'style1.css';
}
document.addEventListener("DOMContentLoaded", function() {
    chno = document.getElementById('ChNo');
    if(chno.value == 'chapter'){
        document.getElementById('chlabel').style.display = 'block';
        document.getElementById('chdw').style.display = 'block';
        document.getElementById('nblabel').style.display = 'none';
        document.getElementById('nbdw').style.display = 'none';
    }
    else{
        document.getElementById('chlabel').style.display = 'none';
        document.getElementById('chdw').style.display = 'none';
        document.getElementById('nblabel').style.display = 'block';
        document.getElementById('nbdw').style.display = 'block';
    } 
    chno.addEventListener('change', function() {
        if(chno.value == 'chapter'){
            document.getElementById('chlabel').style.display = 'block';
            document.getElementById('chdw').style.display = 'block';
            document.getElementById('nblabel').style.display = 'none';
            document.getElementById('nbdw').style.display = 'none';
            updatecontent()
        }
        else{
            document.getElementById('chlabel').style.display = 'none';
            document.getElementById('chdw').style.display = 'none';
            document.getElementById('nblabel').style.display = 'block';
            document.getElementById('nbdw').style.display = 'block';
            updatecontent()
        } 
    });
});
classobj = document.getElementById('class')
subjectobj = document.getElementById('subject')
chapterobj = document.getElementById('chdw')
notebookobj = document.getElementById('nbdw')
chno = document.getElementById('ChNo');
classval = classobj.value;
subjectval = subjectobj.value;
chapterval = chapterobj.value;
notebookval = notebookobj.value;
classobj.addEventListener('change', function(){
    classval = classobj.value;
    updatecontent()
})
subjectobj.addEventListener('change', function(){
    subjectval = subjectobj.value;
    updatecontent()
})
updatecontent()
function updatecontent(){
    if(chno.value == 'chapter'){
        list = chapterlist[classval][subjectval]
        console.log(list)
        while (chapterobj.firstChild) {
            chapterobj.removeChild(chapterobj.firstChild);
        }
        for (let i = 0; i < list.length; i++) {
            let option = document.createElement('option');
            option.value = list[i];
            option.textContent = list[i];
            chapterobj.appendChild(option);
        }
    }
    else{
        list = notebooklist[classval][subjectval]
        console.log(list)
        while (notebookobj.firstChild) {
            notebookobj.removeChild(notebookobj.firstChild);
        }
        for (let i = 0; i < list.length; i++) {
            let option = document.createElement('option');
            option.value = list[i];
            option.textContent = list[i];
            notebookobj.appendChild(option);
        }
    }
}

document.getElementById('index').addEventListener('click', function(){
    window.open('pdfs/indexes.pdf', '_blank')
})
document.getElementById('fetch').addEventListener('click', function(){
    classval = classobj.value;
    subjectval = subjectobj.value;
    chapterval = chapterobj.value;
    notebookval = notebookobj.value;
    // alert('pdfs/' + classval + '_' + subjectval + '_' + chapterval)
    if(chno.value == 'chapter'){
        window.open('pdfs/' + classval + '_' + subjectval + '_' + chapterval + '.pdf', '_blank')
    }
    else{
        window.open('pdfs/' + classval + '_' + subjectval + '_' + notebookval + '.pdf', '_blank')
    }
})