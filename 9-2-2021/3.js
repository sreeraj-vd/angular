function add(x, y, z) {
    console.log(z);
    if (typeof x == "number" && typeof y == "number" && z == undefined) {
        console.log(x + y);
    }
    else if (z != undefined && typeof x == "number" && typeof y == "number") {
        console.log(x + y + z);
    }
    else if (typeof x == "string" && typeof y == "string") {
        console.log(x + y);
    }
}
add(1, 2);
add(1, 2, 3);
add("a", "b");
