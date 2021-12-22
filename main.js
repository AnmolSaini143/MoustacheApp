moustache_x = 0;
moustache_y = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/wjMvsB40/moustache.png');
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function draw()
{
    image(video, 0, 0, 400, 400)
    image(moustache, moustache_x, moustache_y, 130, 75);
}

function take_snapshot()
{
    save('MoustacheFace.png');
}

function modelLoaded() {
    console.log('PoseNet is ready')
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x =", + results[0].pose.nose.x);
        console.log("nose y = ", + results[0].pose.nose.y);

        moustache_x = results[0].pose.nose.x-65;
        moustache_y = results[0].pose.nose.y-10;
    }
}