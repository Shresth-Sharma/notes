chapterlist = {
    '11':{
        'Maths':['Ch-1 Sets Numbers & Intervals', 'Ch-2 Fundamentals of Algebra', 'Ch-3 Quadratic Equation', 'Ch-4 Logarithm', 'Ch-5 Sequence and Series', 'Ch-6 Trigonometric Ratios', 'Ch-7 Trigonometric Equations', 'Ch-8 Solution Of Triangles', 'Ch-9 Determinants', 'Ch-10 Straight Line', 'Ch-11 Circles'],
        'Physics':['Ch-1 Units&Dimension, Basic Maths and Vector', 'Ch-2 Kinematics-1D and Calculus', 'Ch-3 Kinematics-2D', 'Ch-4 Newton\'s Laws of motion & Friction', 'Ch-5 Work, Power and Energy', 'Ch-6 Circular Motion', 'Ch-7 System of Particles'],
        'Chemistry':['Ch-1 Quantum Number', 'Ch-2 Periodic Table', 'Ch-3 Chemical Bonding', 'Ch-4 Mole Concept', 'Ch-5 Concentration Terms', 'Ch-6 Redox Reaction', 'Ch-7 Ideal Gas', 'Ch-8 Real Gas'],
        'Biology':['Ch-1 Cell The unit of Life'],
        'English':['Not Available!']
    }
}
notebooklist = {
    '11':{
        'Maths':['Notebook-1', 'Notebook-2', 'Notebook-3'],
        'Physics':['Notebook-1', 'Notebook-2'],
        'Chemistry':['Notebook-1', 'Notebook-2', 'Notebook-3'],
        'Biology':['Notebook-1'],
        'English':['Not Available!']
    }
}
codelist = {
    '11_Chemistry_Ch-1 Quantum Number':'asdkfji3',
    '11_Chemistry_Ch-2 Periodic Table':'akfjk;akh3',
    '11_Chemistry_Ch-3 Chemical Bonding':'j3ri3da',
    '11_Chemistry_Ch-4 Mole Concept':'dkjf920as',
    '11_Chemistry_Ch-5 Concentration Terms':'afj3k;90sf',
    '11_Chemistry_Ch-6 Redox Reaction':'akd;fj392',
    '11_Chemistry_Ch-7 Ideal Gas':'kflm3f3920',
    '11_Chemistry_Ch-8 Real Gas':'akdfjis;fkd',
    '11_Chemistry_Notebook-1':'a;dfj;23j',
    '11_Chemistry_Notebook-2':'jk23jvijf9',
    '11_Chemistry_Notebook-3':'fkj38f0a9f',
    '11_Maths_Ch-1 Sets Numbers & Intervals':'kafj;3jkad',
    '11_Maths_Ch-2 Fundamentals of Algebra':'fj;kj3sk3l',
    '11_Maths_Ch-3 Quadratic Equation':'f3jhlajfu3',
    '11_Maths_Ch-4 Logarithm':'ifa;kj3kl',
    '11_Maths_Ch-5 Sequence and Series':'afj3kn;fk3j',
    '11_Maths_Ch-6 Trigonometric Ratios':'akd;f3idf9',
    '11_Maths_Ch-7 Trigonometric Equations':'dasfk3n9f',
    '11_Maths_Ch-8 Solution of Triangles':'dfl390dsf',
    '11_Maths_Ch-9 Determinants':'9f39jk;alfkj3',
    '11_Maths_Ch-10 Straight Line':'fk30s3lfj39',
    '11_Maths_Ch-11 Circles':'jfeikdsnf',
    '11_Maths_Notebook-1':'ak;dfj;',
    '11_Maths_Notebook-2':'fk;3lkjfs',
    '11_Maths_Notebook-3':'903jsf3',
    '11_Physics_Ch-1 Units&Dimension':'fk;3jksj;f3',
    '11_Physics_Ch-2 Kinematics-1D and Calculus':'f3j9s9f3j',
    '11_Physics_Ch-3 Kinematics-2D':'af3sg3sdf',
    '11_Physics_Ch-4 Newton\'s Laws of motion & Friction':'at3jf3s9f3',
    '11_Physics_Ch-5 Work, Power and Energy':'dfj3k;js9df',
    '11_Physics_Ch-6 Circular Motion':'fj3kjf93ks',
    '11_Physics_Ch-7 System of Particles':'jkfa3sf0ik',
    '11_Physics_Notebook-1':'f3j;s9f3',
    '11_Physics_Notebook-2':'fkj39slf3'
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
    // if(chno.value == 'chapter'){
    //     window.open('pdfs/' + codelist[classval + '_' + subjectval + '_' + chapterval]+ '.pdf', '_blank')
    // }
    // else{
    //     window.open('pdfs/' + codelist[classval + '_' + subjectval + '_' + notebookval] + '.pdf', '_blank')
    // }
    console.log(classval + '_' + subjectval + '_' + subjectval)
    if(chno.value == 'chapter'){
        window.open('https://shresth-sharma.github.io/html/pdfview1.html?pdf='+codelist[classval + '_' + subjectval + '_' + chapterval], '_blank')
    }
    else{
        window.open('https://shresth-sharma.github.io/html/pdfview1.html?pdf='+codelist[classval + '_' + subjectval + '_' + notebookval], '_blank')
    }
})
