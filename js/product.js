
let products=[
    {
        brand:"havells",
        image:"https://m.media-amazon.com/images/I/31x-Xz8TkbL._SX300_SY300_QL70_FMwebp_.jpg",
        pro_name:" kids headphones pack multi colored for..",
        rate:"$100.00",
    },
    {
        brand:"sony",
        image:"https://m.media-amazon.com/images/I/41kVfqZ8DvL._SX300_SY300_QL70_FMwebp_.jpg",
        pro_name:"olymbus pen e-PL9 kit camera",
        rate:"$10.00",
    },
    {
        brand:"havells",
        image:"https://m.media-amazon.com/images/I/41me-QfWqRL._SX300_SY300_QL70_FMwebp_.jpg",
        pro_name:"honor t17.0 1 gB RAM 8GB",
        rate:"$100.00",
    },
    {
        brand:"bajaj",
        image:"https://m.media-amazon.com/images/I/41TAKjYMgxL._SX300_SY300_QL70_FMwebp_.jpg",
        pro_name:"beoplay a1 portable bluthooth speaker with..",
        rate:"$500.00",
        rate_2:"$760.00",
    },
    {
        brand:"sony",
        image:"https://m.media-amazon.com/images/I/51WzqtFGcCL._SX300_SY300_QL70_FMwebp_.jpg",
        pro_name:" milanese loop watch band  apple..",
        rate:"$10.00",
    },
    {
        brand:"sony",
        image:"https://m.media-amazon.com/images/I/51UH57Cs5hL._SX300_SY300_QL70_FMwebp_.jpg",
        pro_name:" sony EXTRA BASS portable wireless..",
        rate:"$220.00",
    },
    {
        brand:"havells",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/webcam/x/v/4/ft-2252-usb-webcam-640x480-resolution-30fps-frame-rate-built-in-original-imagvqeghzhqdngy.jpeg?q=70",
        pro_name:"  kids headphones multi colored for..",
        rate:"$100.00",
    },
    {
        brand:"sony",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/h/b/90-midnight-black-12gb-512gb-rea-nx9-honor-original-imagtsd3uhxefkga.jpeg?q=70",
        pro_name:"olymbus pen e-PL9 kit camera",
        rate:"$10.00",
    },
    {
        brand:"havells",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/h/k/z/x360-bf0058tu-thin-and-light-laptop-hp-original-imagh4ypj3ujgska.jpeg?q=70",
        pro_name:"honor t17.0 1 gB RAM 8GB ROM..",
        rate:"$100.00",
    },
    {
        brand:"bajaj",
        image:"https://rukminim2.flixcart.com/image/416/416/k4x2du80/camera/5/d/r/d-design-kids-children-s-digital-video-camera-children-s-digital-original-imafnp5yjcyysdst.jpeg?q=70",
        pro_name:"beoplay a1 portable bluthooth speaker with..",
        rate:"$500.00",
        rate_2:"$760.00",
    },
    {
        brand:"sony",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/speaker/y/g/t/-original-imagsp5pdbdurjsj.jpeg?q=70",
        pro_name:" milanese loop watch band  apple..",
        rate:"$10.00",
    },
    {
        brand:"sony",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
        pro_name:"sony EXTRA BASS portable wireless..",
        rate:"$220.00",
    },
    {
        brand:"havells",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/watch/g/p/a/-original-imagrdzfhmhggmbz.jpeg?q=70",
        pro_name:"honor t17.0 1 gB RAM 8GB ROM..",
        rate:"$100.00",
    },
    {
        brand:"bajaj",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/camera/t/g/i/uv-kids-toy-digital-camera-video-recorder-2-inch-display-3-mp-original-imagufhcszkfgzjt.jpeg?q=70",
        pro_name:"beoplay a1 portable bluthooth speaker with..",
        rate:"$500.00",
        rate_2:"$760.00",
    },
    {
        brand:"sony",
        image:"https://rukminim2.flixcart.com/image/416/416/ktszgy80/speaker/mobile-tablet-speaker/q/l/6/stone-1200f-boat-original-imag72dhnht7vaqq.jpeg?q=70",
        pro_name:"milanese loop watch band  apple..",
        rate:"$10.00",
    },
    {
        brand:"sony",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/j/r/a/gaming-pro-60-with-enc-hd-calling-deep-bass-low-latency-gaming-original-imagmq6wfeu3zbnn.jpeg?q=70",
        pro_name:"sony EXTRA BASS portable wireless..",
        rate:"$220.00",
    },
];


let selectMenu=document.querySelector("#select");
let productContainer=document.querySelector(".pro-products");

selectMenu.addEventListener("change",(event)=>{
    let values=event.target.value;

    productContainer.innerHTML="";

    values=="all"?productLoad(products):productLoad(products.filter((product)=>product.brand==values));
});


function productLoad(products){
    let productItems=products.map((item)=>{
        let product=`
        <div class="product">
        <div class="product-image">
            <img
            src="${item.image}"
            />
        </div>
        <div class="product-content">
            <p>${item.brand}</p>
            <strong>${item.pro_name}</strong>
            <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="amount">${item.rate}</div>
        </div>
        <span>
        <i class="fa-regular fa-heart"></i>
        </span>
 </div>
        
        `;

        return product;
    }).join("");


    productContainer.innerHTML=productItems;
}

productLoad(products);



