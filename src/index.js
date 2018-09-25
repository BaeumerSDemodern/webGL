importScript("WebGL/Matrix4x4.js");
importScript("WebGL/Context.js");

window.onload = function(){
    console.log("onload");
    // var translate = new Float32Array([
    //     1.0,0.0,0.0,1.0,
    //     0.0,1.0,0.0,1.0,
    //     0.0,0.0,1.0,1.0,
    //     0.0,0.0,0.0,1.0,
    // ]);    
    // var vec = new Float32Array([0.0,1.0,5.0,1.0]);
    // console.log(vec);
    // vec = Matrix4x4.multiply(translate,vec);
    // console.log(vec);

    // console.log(matrix);
    // var test = Matrix4x4.perspective((90.0/180.0)*(3.141),1,0.1,10);
    // console.log(test);
    var context = new Context();
}

function importScript(path){
    var root = document.documentElement;
    for(var i = 0; i < root.children.length; i++){
        var child = root.children[i];
        if(child=="[object HTMLHeadElement]"){
            var head = child;
            var script = document.createElement("script");
            script.setAttribute("src", path);
            head.append(script);
        }
    }
}