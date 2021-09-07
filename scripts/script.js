const   tlMain = new TimelineMax({repeat:-1, paused:false, yoyo:true}),
        tlArms = new TimelineMax({repeat:-1, paused:false, yoyo:true});
        robot = $('#robot'),
        head = $('#head_1'),
        rBody = $('#body_2'),
        wheels = $('#wheels_2'),
        leftArm = $('#left_x5F_arm_2'),
        rightArm = $('#right_x5F_arm_2'),
        body = document.body;
   
tlMain.set(robot, {x:200, y:50})
    //.pause()
    .to(robot, 1, {y:-30, ease: Bounce.easeOut, y: -5})
    .to(head, .15, {scale:1.5, transformOrigin:'50% 50%'})
    .to(head, .15, {scale:1, transformOrigin:'50% 50%'})
    .to(rBody, .15, {scale:1.5, transformOrigin:'50% 50%'})
    .to(rBody, .15, {scale:1, transformOrigin:'50% 50%'})
    .to(wheels, .15, {scale:1.5, transformOrigin:'50% 50%'})
    .to(wheels, .15, {scale:1, transformOrigin:'50% 50%'})
    .to(robot, 1, {y:30, ease: Bounce.easeOut, y: -5}, "+=.75");

tlArms.to(leftArm, .25, {rotation:10, transformOrigin:'100% 0%'})
        .to(rightArm, .25, {rotation:-100, transformOrigin:'0% 0%'})
  

/* helpers */
function $ (el) {
    return document.querySelector(el);
}
    
function $$ (els)  {
    return document.querySelectorAll(els);
}    
   