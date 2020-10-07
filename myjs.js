var firebaseConfig = {
    apiKey: "AIzaSyDOHBLmCc2g5PhJct9uG-_gN22crIEufcg",
    authDomain: "mccossum-com.firebaseapp.com",
    databaseURL: "https://mccossum-com.firebaseio.com",
    projectId: "mccossum-com",
    storageBucket: "mccossum-com.appspot.com",
    messagingSenderId: "367842981175",
    appId: "1:367842981175:web:aa87a52fbac1eb50ec96b2",
    measurementId: "G-Q568J147DC"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messaging = firebase.messaging()

messaging.usePublicVapidKey('BFAwEvEjniNJFM1JrXCHod5I9HJazb1icCPG2ZaVmW3VNaDYcY9qn7M5m4qDIoNDElsRg3ZGwTlf78_ohXvf-CM');

messaging.getToken().then((currentToken) => {
//    console.log(currentToken)
})