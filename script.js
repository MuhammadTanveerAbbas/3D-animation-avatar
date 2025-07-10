function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./Avatar/male0001.webp
     ./Avatar/male0002.webp
     ./Avatar/male0003.webp
     ./Avatar/male0004.webp
     ./Avatar/male0005.webp
     ./Avatar/male0006.webp
     ./Avatar/male0007.webp
     ./Avatar/male0008.webp
     ./Avatar/male0009.webp
     ./Avatar/male0010.webp
     ./Avatar/male0011.webp
     ./Avatar/male0012.webp
     ./Avatar/male0013.webp
     ./Avatar/male0014.webp
     ./Avatar/male0015.webp
     ./Avatar/male0016.webp
     ./Avatar/male0017.webp
     ./Avatar/male0018.webp
     ./Avatar/male0019.webp
     ./Avatar/male0020.webp
     ./Avatar/male0021.webp
     ./Avatar/male0022.webp
     ./Avatar/male0023.webp
     ./Avatar/male0024.webp
     ./Avatar/male0025.webp
     ./Avatar/male0026.webp
     ./Avatar/male0027.webp
     ./Avatar/male0028.webp
     ./Avatar/male0029.webp
     ./Avatar/male0030.webp
     ./Avatar/male0031.webp
     ./Avatar/male0032.webp
     ./Avatar/male0033.webp
     ./Avatar/male0034.webp
     ./Avatar/male0035.webp
     ./Avatar/male0036.webp
     ./Avatar/male0037.webp
     ./Avatar/male0038.webp
     ./Avatar/male0039.webp
     ./Avatar/male0040.webp
     ./Avatar/male0041.webp
     ./Avatar/male0042.webp
     ./Avatar/male0043.webp
     ./Avatar/male0044.webp
     ./Avatar/male0045.webp
     ./Avatar/male0046.webp
     ./Avatar/male0047.webp
     ./Avatar/male0048.webp
     ./Avatar/male0049.webp
     ./Avatar/male0050.webp
     ./Avatar/male0051.webp
     ./Avatar/male0052.webp
     ./Avatar/male0053.webp
     ./Avatar/male0054.webp
     ./Avatar/male0055.webp
     ./Avatar/male0056.webp
     ./Avatar/male0057.webp
     ./Avatar/male0058.webp
     ./Avatar/male0059.webp
     ./Avatar/male0060.webp
     ./Avatar/male0061.webp
     ./Avatar/male0062.webp
     ./Avatar/male0063.webp
     ./Avatar/male0064.webp
     ./Avatar/male0065.webp
     ./Avatar/male0066.webp
     ./Avatar/male0067.webp
     ./Avatar/male0068.webp
     ./Avatar/male0069.webp
     ./Avatar/male0070.webp
     ./Avatar/male0071.webp
     ./Avatar/male0072.webp
     ./Avatar/male0073.webp
     ./Avatar/male0074.webp
     ./Avatar/male0075.webp
     ./Avatar/male0076.webp
     ./Avatar/male0077.webp
     ./Avatar/male0078.webp
     ./Avatar/male0079.webp
     ./Avatar/male0080.webp
     ./Avatar/male0081.webp
     ./Avatar/male0082.webp
     ./Avatar/male0083.webp
     ./Avatar/male0084.webp
     ./Avatar/male0085.webp
     ./Avatar/male0086.webp
     ./Avatar/male0087.webp
     ./Avatar/male0088.webp
     ./Avatar/male0089.webp
     ./Avatar/male0090.webp
     ./Avatar/male0091.webp
     ./Avatar/male0092.webp
     ./Avatar/male0093.webp
     ./Avatar/male0094.webp
     ./Avatar/male0095.webp
     ./Avatar/male0096.webp
     ./Avatar/male0097.webp
     ./Avatar/male0098.webp
     ./Avatar/male0099.webp
     ./Avatar/male0100.webp
     ./Avatar/male0101.webp
     ./Avatar/male0102.webp
     ./Avatar/male0103.webp
     ./Avatar/male0104.webp
     ./Avatar/male0105.webp
     ./Avatar/male0106.webp
     ./Avatar/male0107.webp
     ./Avatar/male0108.webp
     ./Avatar/male0109.webp
     ./Avatar/male0110.webp
     ./Avatar/male0111.webp
     ./Avatar/male0112.webp
     ./Avatar/male0113.webp
     ./Avatar/male0114.webp
     ./Avatar/male0115.webp
     ./Avatar/male0116.webp
     ./Avatar/male0117.webp
     ./Avatar/male0118.webp
     ./Avatar/male0119.webp
     ./Avatar/male0120.webp
     ./Avatar/male0121.webp
     ./Avatar/male0122.webp
     ./Avatar/male0123.webp
     ./Avatar/male0124.webp
     ./Avatar/male0125.webp
     ./Avatar/male0126.webp
     ./Avatar/male0127.webp
     ./Avatar/male0128.webp
     ./Avatar/male0129.webp
     ./Avatar/male0130.webp
     ./Avatar/male0131.webp
     ./Avatar/male0132.webp
     ./Avatar/male0133.webp
     ./Avatar/male0134.webp
     ./Avatar/male0135.webp
     ./Avatar/male0136.webp
     ./Avatar/male0137.webp
     ./Avatar/male0138.webp
     ./Avatar/male0139.webp
     ./Avatar/male0140.webp
     ./Avatar/male0141.webp
     ./Avatar/male0142.webp
     ./Avatar/male0143.webp
     ./Avatar/male0144.webp
     ./Avatar/male0145.webp
     ./Avatar/male0146.webp
     ./Avatar/male0147.webp
     ./Avatar/male0148.webp
     ./Avatar/male0149.webp
     ./Avatar/male0150.webp
     ./Avatar/male0151.webp
     ./Avatar/male0152.webp
     ./Avatar/male0153.webp
     ./Avatar/male0154.webp
     ./Avatar/male0155.webp
     ./Avatar/male0156.webp
     ./Avatar/male0157.webp
     ./Avatar/male0158.webp
     ./Avatar/male0159.webp
     ./Avatar/male0160.webp
     ./Avatar/male0161.webp
     ./Avatar/male0162.webp
     ./Avatar/male0163.webp
     ./Avatar/male0164.webp
     ./Avatar/male0165.webp
     ./Avatar/male0166.webp
     ./Avatar/male0167.webp
     ./Avatar/male0168.webp
     ./Avatar/male0169.webp
     ./Avatar/male0170.webp
     ./Avatar/male0171.webp
     ./Avatar/male0172.webp
     ./Avatar/male0173.webp
     ./Avatar/male0174.webp
     ./Avatar/male0175.webp
     ./Avatar/male0176.webp
     ./Avatar/male0177.webp
     ./Avatar/male0178.webp
     ./Avatar/male0179.webp
     ./Avatar/male0180.webp
     ./Avatar/male0181.webp
     ./Avatar/male0182.webp
     ./Avatar/male0183.webp
     ./Avatar/male0184.webp
     ./Avatar/male0185.webp
     ./Avatar/male0186.webp
     ./Avatar/male0187.webp
     ./Avatar/male0188.webp
     ./Avatar/male0189.webp
     ./Avatar/male0190.webp
     ./Avatar/male0191.webp
     ./Avatar/male0192.webp
     ./Avatar/male0193.webp
     ./Avatar/male0194.webp
     ./Avatar/male0195.webp
     ./Avatar/male0196.webp
     ./Avatar/male0197.webp
     ./Avatar/male0198.webp
     ./Avatar/male0199.webp
     ./Avatar/male0200.webp
     ./Avatar/male0201.webp
     ./Avatar/male0202.webp
     ./Avatar/male0203.webp
     ./Avatar/male0204.webp
     ./Avatar/male0205.webp
     ./Avatar/male0206.webp
     ./Avatar/male0207.webp
     ./Avatar/male0208.webp
     ./Avatar/male0209.webp
     ./Avatar/male0210.webp
     ./Avatar/male0211.webp
     ./Avatar/male0212.webp
     ./Avatar/male0213.webp
     ./Avatar/male0214.webp
     ./Avatar/male0215.webp
     ./Avatar/male0216.webp
     ./Avatar/male0217.webp
     ./Avatar/male0218.webp
     ./Avatar/male0219.webp
     ./Avatar/male0220.webp
     ./Avatar/male0221.webp
     ./Avatar/male0222.webp
     ./Avatar/male0223.webp
     ./Avatar/male0224.webp
     ./Avatar/male0225.webp
     ./Avatar/male0226.webp
     ./Avatar/male0227.webp
     ./Avatar/male0228.webp
     ./Avatar/male0229.webp
     ./Avatar/male0230.webp
     ./Avatar/male0231.webp
     ./Avatar/male0232.webp
     ./Avatar/male0233.webp
     ./Avatar/male0234.webp
     ./Avatar/male0235.webp
     ./Avatar/male0236.webp
     ./Avatar/male0237.webp
     ./Avatar/male0238.webp
     ./Avatar/male0239.webp
     ./Avatar/male0240.webp
     ./Avatar/male0241.webp
     ./Avatar/male0242.webp
     ./Avatar/male0243.webp
     ./Avatar/male0244.webp
     ./Avatar/male0245.webp
     ./Avatar/male0246.webp
     ./Avatar/male0247.webp
     ./Avatar/male0248.webp
     ./Avatar/male0249.webp
     ./Avatar/male0250.webp
     ./Avatar/male0251.webp
     ./Avatar/male0252.webp
     ./Avatar/male0253.webp
     ./Avatar/male0254.webp
     ./Avatar/male0255.webp
     ./Avatar/male0256.webp
     ./Avatar/male0257.webp
     ./Avatar/male0258.webp
     ./Avatar/male0259.webp
     ./Avatar/male0260.webp
     ./Avatar/male0261.webp
     ./Avatar/male0262.webp
     ./Avatar/male0263.webp
     ./Avatar/male0264.webp
     ./Avatar/male0265.webp
     ./Avatar/male0266.webp
     ./Avatar/male0267.webp
     ./Avatar/male0268.webp
     ./Avatar/male0269.webp
     ./Avatar/male0270.webp
     ./Avatar/male0271.webp
     ./Avatar/male0272.webp
     ./Avatar/male0273.webp
     ./Avatar/male0274.webp
     ./Avatar/male0275.webp
     ./Avatar/male0276.webp
     ./Avatar/male0277.webp
     ./Avatar/male0278.webp
     ./Avatar/male0279.webp
     ./Avatar/male0280.webp
     ./Avatar/male0281.webp
     ./Avatar/male0282.webp
     ./Avatar/male0283.webp
     ./Avatar/male0284.webp
     ./Avatar/male0285.webp
     ./Avatar/male0286.webp
     ./Avatar/male0287.webp
     ./Avatar/male0288.webp
     ./Avatar/male0289.webp
     ./Avatar/male0290.webp
     ./Avatar/male0291.webp
     ./Avatar/male0292.webp
     ./Avatar/male0293.webp
     ./Avatar/male0294.webp
     ./Avatar/male0295.webp
     ./Avatar/male0296.webp
     ./Avatar/male0297.webp
     ./Avatar/male0298.webp
     ./Avatar/male0299.webp
     ./Avatar/male0300.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});
