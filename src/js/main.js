requirejs.config({
    baseUrl: 'js',
    paths: {
        map1: 'business/map',
        jquery: "lib/jquery-3.0.0.min",
        common:"module/common",
        student:"module/student",
        apple:"module/apple"
    },
    shim: {
        map1: { exports: "map" }
    }
});