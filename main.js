function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Vw1xsWei0/', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}