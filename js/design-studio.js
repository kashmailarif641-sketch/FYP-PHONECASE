const brandModels = {

  iphone: {
    "iPhone 6 Series": ["iPhone 6", "iPhone 6s"],
    "iPhone 7 Series": ["iPhone 7", "iPhone 7 Plus"],
    "iPhone 8 Series": ["iPhone 8", "iPhone 8 Plus"],
    "iPhone X Series": ["iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max"],
    "iPhone 11 Series": ["iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max"],
    "iPhone 12 Series": ["iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max"],
    "iPhone 13 Series": ["iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max"],
    "iPhone 14 Series": ["iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"],
    "iPhone 15 Series": ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"],
    "iPhone 16 Series": ["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max"],
    "iPhone 17 Series": ["iPhone 17", "iPhone 17 Plus", "iPhone 17 Pro", "iPhone 17 Pro Max"]
  },

  samsung: {
    "Galaxy S Series": [
      "Galaxy S20", "Galaxy S20 Plus", "Galaxy S20 Ultra",
      "Galaxy S21", "Galaxy S21 Plus", "Galaxy S21 Ultra",
      "Galaxy S22", "Galaxy S22 Plus", "Galaxy S22 Ultra",
      "Galaxy S23", "Galaxy S23 Plus", "Galaxy S23 Ultra",
      "Galaxy S24", "Galaxy S24 Plus", "Galaxy S24 Ultra"
    ],
    "Galaxy A Series": [
      "Galaxy A52", "Galaxy A54", "Galaxy A73"
    ],
    "Galaxy Note Series": [
      "Galaxy Note 10", "Galaxy Note 20 Ultra"
    ]
  },

  xiaomi: [
    "Redmi Note 10",
    "Redmi Note 11",
    "Redmi Note 12",
    "Redmi Note 13",
    "Xiaomi 11",
    "Xiaomi 12",
    "Xiaomi 13",
    "Xiaomi 14"
  ],

  oppo: [
    "Oppo F17",
    "Oppo F19",
    "Oppo F21 Pro",
    "Oppo Reno 6",
    "Oppo Reno 7",
    "Oppo Reno 8",
    "Oppo Reno 10",
    "Oppo Find X3",
    "Oppo Find X5"
  ],

  vivo: [
    "Vivo V20",
    "Vivo V21",
    "Vivo V23",
    "Vivo V27",
    "Vivo V29",
    "Vivo X60",
    "Vivo X70",
    "Vivo X80",
    "Vivo X90"
  ],

  huawei: [
    "Huawei P30",
    "Huawei P40",
    "Huawei P50",
    "Huawei Mate 30",
    "Huawei Mate 40",
    "Huawei Nova 9"
  ],

  realme: [
    "Realme 8",
    "Realme 9",
    "Realme 10",
    "Realme GT",
    "Realme GT 2",
    "Realme C55"
  ],

  tecno: [
    "Tecno Spark 10",
    "Tecno Spark 20",
    "Tecno Camon 18",
    "Tecno Camon 20"
  ],

  infinix: [
    "Infinix Note 10",
    "Infinix Note 12",
    "Infinix Note 30",
    "Infinix Zero 20"
  ],

  googlepixel: [
    "Pixel 6",
    "Pixel 6 Pro",
    "Pixel 7",
    "Pixel 7 Pro",
    "Pixel 8",
    "Pixel 8 Pro"
  ],

  motorola: [
    "Moto G60",
    "Moto G73",
    "Moto Edge 30",
    "Moto Edge 40"
  ],

  oneplus: [
    "OnePlus 8",
    "OnePlus 8 Pro",
    "OnePlus 9",
    "OnePlus 9 Pro",
    "OnePlus 10 Pro",
    "OnePlus 11",
    "OnePlus 12"
  ]

};

const MODEL_CONFIG = {
  // ✅ iPhone 6 Series
  "iPhone 6": {
    ratio: 138.1 / 67.0,
    cornerRadius: 44,
    cutoutType: "circle",
    cutoutRadius: 10,
    cutout: {
      w: 0.12,
      h: 0.12,
      left: 0.075,
      top: 0.045
    }
  },

  // ✅ iPhone 6s Series
  "iPhone 6s": {
    ratio: 138.3 / 67.1,
    cornerRadius: 44,
    cutoutType: "circle",
    cutoutRadius: 10,
    cutout: {
      w: 0.12,
      h: 0.12,
      left: 0.075,
      top: 0.045
    }
  },
  //✅ iPhone 7 Series
  "iPhone 7": {
    ratio: 138.3 / 67.1,
    cornerRadius: 45,
    cutoutType: "rounded-square",
    cutoutRadius: 14,
    cutout: {
      w: 0.20,
      h: 0.11,
      left: 0.065,
      top: 0.043
    }
  },
  // ✅ iPhone 7 plus Series
  "iPhone 7 Plus": {
    ratio: 158.2 / 77.9,
    cornerRadius: 46,
    cutoutType: "rounded-square",
    cutoutRadius: 16,
    cutout: {
      w: 0.24,
      h: 0.12,
      left: 0.06,
      top: 0.043
    }
  },
  // ✅ iPhone 8 Series
  "iPhone 8": {
    ratio: 138.4 / 67.3,
    cornerRadius: 45,
    cutoutType: "rounded-square",
    cutoutRadius: 14,
    cutout: {
      w: 0.20,
      h: 0.11,
      left: 0.065,
      top: 0.043
    }
  },
  // ✅ iPhone 8 plus Series
  "iPhone 8 Plus": {
    ratio: 158.4 / 78.1,
    cornerRadius: 47,
    cutoutType: "rounded-square",
    cutoutRadius: 16,
    cutout: {
      w: 0.24,
      h: 0.12,
      left: 0.06,
      top: 0.043
    }
  },

  // ✅ iPhone X / XS Series
  "iPhone X": { ratio: 2.03, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.18, h: 0.28, left: 0.06, top: 0.05 } },
  "iPhone XS": { ratio: 2.03, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.18, h: 0.28, left: 0.06, top: 0.05 } },
  "iPhone XS Max": { ratio: 2.16, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.20, h: 0.30, left: 0.05, top: 0.05 } },
  "iPhone XR": { ratio: 1.99, cornerRadius: 54, cutoutType: "circle", cutoutRadius: 22, cutout: { w: 0.14, h: 0.14, left: 0.07, top: 0.045 } },

  // ✅ iPhone 11 Series
  "iPhone 11": { ratio: 1.99, cornerRadius: 55, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.28, h: 0.20, left: 0.06, top: 0.05 } },
  "iPhone 11 Pro": { ratio: 2.03, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 34, cutout: { w: 0.32, h: 0.24, left: 0.05, top: 0.05 } },
  "iPhone 11 Pro Max": { ratio: 2.16, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 36, cutout: { w: 0.34, h: 0.26, left: 0.05, top: 0.05 } },

  // ✅ iPhone 12 Series
  "iPhone 12": { ratio: 2.05, cornerRadius: 38, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.28, h: 0.21, left: 0.06, top: 0.05 } },
  "iPhone 12 Mini": { ratio: 2.17, cornerRadius: 36, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.26, h: 0.20, left: 0.06, top: 0.05 } },
  "iPhone 12 Pro": { ratio: 2.05, cornerRadius: 40, cutoutType: "rounded-square", cutoutRadius: 34, cutout: { w: 0.32, h: 0.24, left: 0.05, top: 0.05 } },
  "iPhone 12 Pro Max": { ratio: 2.16, cornerRadius: 42, cutoutType: "rounded-square", cutoutRadius: 36, cutout: { w: 0.34, h: 0.26, left: 0.05, top: 0.05 } },

  // ✅ iPhone 13 Series
  "iPhone 13": { ratio: 2.05, cornerRadius: 40, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.28, h: 0.21, left: 0.06, top: 0.05 } },
  "iPhone 13 Mini": { ratio: 2.17, cornerRadius: 38, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.26, h: 0.20, left: 0.06, top: 0.05 } },
  "iPhone 13 Pro": { ratio: 2.05, cornerRadius: 42, cutoutType: "rounded-square", cutoutRadius: 36, cutout: { w: 0.34, h: 0.26, left: 0.05, top: 0.05 } },
  "iPhone 13 Pro Max": { ratio: 2.16, cornerRadius: 44, cutoutType: "rounded-square", cutoutRadius: 38, cutout: { w: 0.36, h: 0.28, left: 0.05, top: 0.05 } },

  // iPhone 14
  "iPhone 14": {
    ratio: 146.7 / 71.5,
    cornerRadius: 52,
    cutoutType: "rounded-square",
    cutoutRadius: 14,
    cutout: {
      w: 0.405,
      h: 0.198,
      left: 0.084,
      top: 0.041
    }
  },

  // 🔥 iPhone 15 Series
  "iPhone 15": { ratio: 2.05, cornerRadius: 40, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.28, h: 0.21, left: 0.06, top: 0.05 } },
  "iPhone 15 Plus": { ratio: 2.16, cornerRadius: 42, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.28, h: 0.21, left: 0.06, top: 0.05 } },
  "iPhone 15 Pro": { ratio: 2.06, cornerRadius: 42, cutoutType: "rounded-square", cutoutRadius: 36, cutout: { w: 0.34, h: 0.26, left: 0.05, top: 0.05 } },
  "iPhone 15 Pro Max": { ratio: 2.16, cornerRadius: 44, cutoutType: "rounded-square", cutoutRadius: 38, cutout: { w: 0.36, h: 0.28, left: 0.05, top: 0.05 } },

  // 🚀 iPhone 16 Series
  "iPhone 16": { ratio: 2.06, cornerRadius: 40, cutoutType: "rounded-square", cutoutRadius: 34, cutout: { w: 0.30, h: 0.22, left: 0.06, top: 0.05 } },
  "iPhone 16 Plus": { ratio: 2.17, cornerRadius: 42, cutoutType: "rounded-square", cutoutRadius: 34, cutout: { w: 0.30, h: 0.22, left: 0.06, top: 0.05 } },
  "iPhone 16 Pro": { ratio: 2.07, cornerRadius: 44, cutoutType: "rounded-square", cutoutRadius: 38, cutout: { w: 0.36, h: 0.28, left: 0.05, top: 0.05 } },
  "iPhone 16 Pro Max": { ratio: 2.18, cornerRadius: 46, cutoutType: "rounded-square", cutoutRadius: 40, cutout: { w: 0.38, h: 0.30, left: 0.05, top: 0.05 } },

  // ⚡ iPhone 17 Series
  "iPhone 17": { ratio: 2.06, cornerRadius: 40, cutoutType: "rounded-square", cutoutRadius: 36, cutout: { w: 0.32, h: 0.24, left: 0.06, top: 0.05 } },
  "iPhone 17 Plus": { ratio: 2.17, cornerRadius: 42, cutoutType: "rounded-square", cutoutRadius: 36, cutout: { w: 0.32, h: 0.24, left: 0.06, top: 0.05 } },
  "iPhone 17 Pro": { ratio: 2.07, cornerRadius: 44, cutoutType: "rounded-square", cutoutRadius: 40, cutout: { w: 0.38, h: 0.30, left: 0.05, top: 0.05 } },
  "iPhone 17 Pro Max": { ratio: 2.18, cornerRadius: 46, cutoutType: "rounded-square", cutoutRadius: 42, cutout: { w: 0.40, h: 0.32, left: 0.05, top: 0.05 } },

  // 🔥 Galaxy S20 Series
  "Galaxy S20": { ratio: 2.20, cornerRadius: 58, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.26, h: 0.22, left: 0.06, top: 0.05 } },
  "Galaxy S20 Plus": { ratio: 2.21, cornerRadius: 60, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.28, h: 0.23, left: 0.05, top: 0.05 } },
  "Galaxy S20 Ultra": { ratio: 2.22, cornerRadius: 62, cutoutType: "rounded-square", cutoutRadius: 34, cutout: { w: 0.32, h: 0.26, left: 0.05, top: 0.05 } },

  // 🔥 Galaxy S21 Series
  "Galaxy S21": { ratio: 2.20, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.22, left: 0.05, top: 0.05 } },
  "Galaxy S21 Plus": { ratio: 2.21, cornerRadius: 58, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.29, h: 0.23, left: 0.05, top: 0.05 } },
  "Galaxy S21 Ultra": { ratio: 2.22, cornerRadius: 62, cutoutType: "rounded-square", cutoutRadius: 36, cutout: { w: 0.34, h: 0.28, left: 0.05, top: 0.05 } },

  // 🔥 Galaxy S22 Series
  "Galaxy S22": { ratio: 2.19, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.24, h: 0.22, left: 0.06, top: 0.05 } },
  "Galaxy S22 Plus": { ratio: 2.20, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.26, h: 0.23, left: 0.05, top: 0.05 } },
  "Galaxy S22 Ultra": { ratio: 2.23, cornerRadius: 64, cutoutType: "rounded-square", cutoutRadius: 40, cutout: { w: 0.36, h: 0.30, left: 0.05, top: 0.05 } },

  // 🔥 Galaxy S23 Series
  "Galaxy S23": { ratio: 2.19, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.24, h: 0.22, left: 0.06, top: 0.05 } },
  "Galaxy S23 Plus": { ratio: 2.20, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.26, h: 0.23, left: 0.05, top: 0.05 } },
  "Galaxy S23 Ultra": { ratio: 2.23, cornerRadius: 64, cutoutType: "rounded-square", cutoutRadius: 42, cutout: { w: 0.38, h: 0.32, left: 0.05, top: 0.05 } },

  // 🔥 Galaxy S24 Series
  "Galaxy S24": { ratio: 2.19, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.26, h: 0.22, left: 0.06, top: 0.05 } },
  "Galaxy S24 Plus": { ratio: 2.20, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.28, h: 0.24, left: 0.05, top: 0.05 } },
  "Galaxy S24 Ultra": { ratio: 2.24, cornerRadius: 66, cutoutType: "rounded-square", cutoutRadius: 44, cutout: { w: 0.40, h: 0.34, left: 0.05, top: 0.05 } },

  // 🔥 Galaxy A Series
  "Galaxy A52": { ratio: 2.20, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Galaxy A54": { ratio: 2.20, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Galaxy A73": { ratio: 2.22, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },

  // 🔥 Galaxy Note Series
  "Galaxy Note 10": { ratio: 2.22, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 24, cutout: { w: 0.24, h: 0.22, left: 0.06, top: 0.05 } },
  "Galaxy Note 20 Ultra": { ratio: 2.23, cornerRadius: 60, cutoutType: "rounded-square", cutoutRadius: 38, cutout: { w: 0.34, h: 0.30, left: 0.05, top: 0.05 } },

  // 🔥 OnePlus
  "OnePlus 8": { ratio: 2.20, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 24, cutout: { w: 0.22, h: 0.20, left: 0.06, top: 0.05 } },
  "OnePlus 8 Pro": { ratio: 2.21, cornerRadius: 58, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.24, h: 0.22, left: 0.06, top: 0.05 } },
  "OnePlus 9": { ratio: 2.20, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.26, h: 0.22, left: 0.06, top: 0.05 } },
  "OnePlus 9 Pro": { ratio: 2.21, cornerRadius: 58, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.28, h: 0.24, left: 0.05, top: 0.05 } },
  "OnePlus 10 Pro": { ratio: 2.22, cornerRadius: 60, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.30, h: 0.26, left: 0.05, top: 0.05 } },
  "OnePlus 11": { ratio: 2.22, cornerRadius: 60, cutoutType: "circle", cutoutRadius: 40, cutout: { w: 0.34, h: 0.34, left: 0.05, top: 0.05 } },
  "OnePlus 12": { ratio: 2.23, cornerRadius: 62, cutoutType: "circle", cutoutRadius: 42, cutout: { w: 0.36, h: 0.36, left: 0.05, top: 0.05 } },

  // 🔥 Xiaomi / Redmi
  "Redmi Note 10": { ratio: 2.20, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Redmi Note 11": { ratio: 2.20, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Redmi Note 12": { ratio: 2.21, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Redmi Note 13": { ratio: 2.21, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Xiaomi 11": { ratio: 2.21, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.26, h: 0.23, left: 0.06, top: 0.05 } },
  "Xiaomi 12": { ratio: 2.20, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.26, h: 0.23, left: 0.06, top: 0.05 } },
  "Xiaomi 13": { ratio: 2.20, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.28, h: 0.24, left: 0.06, top: 0.05 } },
  "Xiaomi 14": { ratio: 2.20, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.30, h: 0.25, left: 0.05, top: 0.05 } },

  // 🔥 Oppo
  "Oppo F17": { ratio: 2.20, cornerRadius: 46, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Oppo F19": { ratio: 2.20, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Oppo F21 Pro": { ratio: 2.21, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Oppo Reno 6": { ratio: 2.20, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Oppo Reno 7": { ratio: 2.20, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Oppo Reno 8": { ratio: 2.21, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.29, h: 0.24, left: 0.05, top: 0.05 } },
  "Oppo Reno 10": { ratio: 2.22, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.29, h: 0.24, left: 0.05, top: 0.05 } },
  "Oppo Find X3": { ratio: 2.21, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.30, h: 0.26, left: 0.05, top: 0.05 } },
  "Oppo Find X5": { ratio: 2.21, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.30, h: 0.26, left: 0.05, top: 0.05 } },

  // 🔥 Vivo
  "Vivo V20": { ratio: 2.20, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Vivo V21": { ratio: 2.20, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Vivo V23": { ratio: 2.21, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Vivo V27": { ratio: 2.21, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Vivo V29": { ratio: 2.22, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.29, h: 0.24, left: 0.05, top: 0.05 } },
  "Vivo X60": { ratio: 2.21, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.26, h: 0.23, left: 0.06, top: 0.05 } },
  "Vivo X70": { ratio: 2.21, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.28, h: 0.24, left: 0.05, top: 0.05 } },
  "Vivo X80": { ratio: 2.22, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.30, h: 0.26, left: 0.05, top: 0.05 } },
  "Vivo X90": { ratio: 2.22, cornerRadius: 58, cutoutType: "circle", cutoutRadius: 40, cutout: { w: 0.34, h: 0.34, left: 0.05, top: 0.05 } },

  // 🔥 Huawei
  "Huawei P30": { ratio: 2.21, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.24, h: 0.30, left: 0.06, top: 0.05 } },
  "Huawei P40": { ratio: 2.22, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.28, h: 0.24, left: 0.06, top: 0.05 } },
  "Huawei P50": { ratio: 2.23, cornerRadius: 56, cutoutType: "circle", cutoutRadius: 38, cutout: { w: 0.30, h: 0.36, left: 0.05, top: 0.05 } },
  "Huawei Mate 30": { ratio: 2.22, cornerRadius: 58, cutoutType: "circle", cutoutRadius: 42, cutout: { w: 0.34, h: 0.34, left: 0.05, top: 0.05 } },
  "Huawei Mate 40": { ratio: 2.23, cornerRadius: 60, cutoutType: "circle", cutoutRadius: 44, cutout: { w: 0.36, h: 0.36, left: 0.05, top: 0.05 } },
  "Huawei Nova 9": { ratio: 2.22, cornerRadius: 54, cutoutType: "circle", cutoutRadius: 36, cutout: { w: 0.30, h: 0.36, left: 0.05, top: 0.05 } },

  // 🔥 Realme
  "Realme 8": { ratio: 2.20, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },
  "Realme 9": { ratio: 2.20, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Realme 10": { ratio: 2.21, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Realme GT": { ratio: 2.21, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.23, left: 0.06, top: 0.05 } },
  "Realme GT 2": { ratio: 2.21, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.29, h: 0.24, left: 0.05, top: 0.05 } },
  "Realme C55": { ratio: 2.20, cornerRadius: 46, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.25, h: 0.22, left: 0.06, top: 0.05 } },

  // 🔥 Tecno
  "Tecno Spark 10": { ratio: 2.20, cornerRadius: 46, cutoutType: "rounded-square", cutoutRadius: 24, cutout: { w: 0.24, h: 0.22, left: 0.06, top: 0.05 } },
  "Tecno Spark 20": { ratio: 2.21, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.26, h: 0.23, left: 0.06, top: 0.05 } },
  "Tecno Camon 18": { ratio: 2.21, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.27, h: 0.24, left: 0.06, top: 0.05 } },
  "Tecno Camon 20": { ratio: 2.22, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.29, h: 0.25, left: 0.05, top: 0.05 } },

  // 🔥 Infinix
  "Infinix Note 10": { ratio: 2.20, cornerRadius: 46, cutoutType: "rounded-square", cutoutRadius: 24, cutout: { w: 0.24, h: 0.22, left: 0.06, top: 0.05 } },
  "Infinix Note 12": { ratio: 2.21, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.26, h: 0.23, left: 0.06, top: 0.05 } },
  "Infinix Note 30": { ratio: 2.22, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.28, h: 0.24, left: 0.05, top: 0.05 } },
  "Infinix Zero 20": { ratio: 2.21, cornerRadius: 52, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.29, h: 0.25, left: 0.05, top: 0.05 } },

  // 🔥 Google Pixel
  "Pixel 6": { ratio: 2.22, cornerRadius: 58, cutoutType: "rounded-rect", cutoutRadius: 22, cutout: { w: 0.88, h: 0.12, left: 0.06, top: 0.06 } },
  "Pixel 6 Pro": { ratio: 2.23, cornerRadius: 60, cutoutType: "rounded-rect", cutoutRadius: 24, cutout: { w: 0.90, h: 0.13, left: 0.05, top: 0.06 } },
  "Pixel 7": { ratio: 2.22, cornerRadius: 58, cutoutType: "rounded-rect", cutoutRadius: 22, cutout: { w: 0.86, h: 0.12, left: 0.07, top: 0.06 } },
  "Pixel 7 Pro": { ratio: 2.23, cornerRadius: 60, cutoutType: "rounded-rect", cutoutRadius: 24, cutout: { w: 0.90, h: 0.13, left: 0.05, top: 0.06 } },
  "Pixel 8": { ratio: 2.22, cornerRadius: 60, cutoutType: "rounded-rect", cutoutRadius: 24, cutout: { w: 0.86, h: 0.12, left: 0.07, top: 0.06 } },
  "Pixel 8 Pro": { ratio: 2.23, cornerRadius: 62, cutoutType: "rounded-rect", cutoutRadius: 26, cutout: { w: 0.92, h: 0.14, left: 0.04, top: 0.06 } },

  // 🔥 Motorola
  "Moto G60": { ratio: 2.20, cornerRadius: 48, cutoutType: "rounded-square", cutoutRadius: 26, cutout: { w: 0.24, h: 0.28, left: 0.06, top: 0.05 } },
  "Moto G73": { ratio: 2.21, cornerRadius: 50, cutoutType: "rounded-square", cutoutRadius: 28, cutout: { w: 0.26, h: 0.29, left: 0.06, top: 0.05 } },
  "Moto Edge 30": { ratio: 2.22, cornerRadius: 54, cutoutType: "rounded-square", cutoutRadius: 30, cutout: { w: 0.28, h: 0.30, left: 0.05, top: 0.05 } },
  "Moto Edge 40": { ratio: 2.22, cornerRadius: 56, cutoutType: "rounded-square", cutoutRadius: 32, cutout: { w: 0.30, h: 0.32, left: 0.05, top: 0.05 } },
};

let currentModelId = null;


function selectModelByName(modelName) {
  applyModelConfig(modelName);

  const modelText = document.getElementById("selectedModelText");
  if (modelText) modelText.innerText = modelName;

  const sidebarSelectedText = document.getElementById("sidebarSelectedModel");
  if (sidebarSelectedText) {
    sidebarSelectedText.innerText = modelName;
  }

  // ✅ SAVE brand + model
  if (currentBrand) {
    localStorage.setItem("selectedBrand", currentBrand);
  }
  localStorage.setItem("selectedModel", modelName);
  console.log("Saved selections:", currentBrand, modelName);

  // Set active state on wrapper for CSS visibility
  const editorWrapper = document.querySelector('.editor-wrapper');
  if (editorWrapper) {
    editorWrapper.classList.add('model-selected');
  }

  // Reset view to match initial load
  const placeholder = document.getElementById("canvasPlaceholder");
  if (placeholder) {
    placeholder.classList.add("hidden");
    placeholder.style.display = "none";
  }

  // Scroll back to top of workspace
  const scrollContainer = document.querySelector(".scroll-container");
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  // auto scale after model change with a slight delay for layout stabilization
  setTimeout(() => {
    zoomLevel = 0.5;
    applyZoom();
    updatePreview();
  }, 50);

  closeBrandModal();
  const dynamicModal = document.getElementById("modelModalDynamic");
  if (dynamicModal) dynamicModal.remove();
}

/**
 * Core rendering logic for dynamic phone models
 * Uses ONE unified compound SVG path with evenodd fill rule for subtraction
 */
function applyModelConfig(modelName) {
  const config = MODEL_CONFIG[modelName];
  if (!config) return;

  currentModelId = modelName;
  const designSheet = document.getElementById("design-sheet");
  if (!designSheet) return;

  const baseWidth = 300;
  const calculatedHeight = baseWidth * config.ratio;

  designSheet.style.width = baseWidth + "px";
  designSheet.style.height = calculatedHeight + "px";

  if (fabricCanvas) {
    fabricCanvas.setWidth(baseWidth);
    fabricCanvas.setHeight(calculatedHeight);

    // Reset any existing clipPath
    fabricCanvas.clipPath = null;

    // Remove existing phone body objects
    fabricCanvas.getObjects().forEach(obj => {
      if (obj.name === 'phone-body') {
        fabricCanvas.remove(obj);
      }
    });

    // 1. Generate Phone Body Path (Outer)
    const r = config.cornerRadius;
    const bodyPath = `M 0 ${r} 
                      A ${r} ${r} 0 0 1 ${r} 0 
                      L ${baseWidth - r} 0 
                      A ${r} ${r} 0 0 1 ${baseWidth} ${r} 
                      L ${baseWidth} ${calculatedHeight - r} 
                      A ${r} ${r} 0 0 1 ${baseWidth - r} ${calculatedHeight} 
                      L ${r} ${calculatedHeight} 
                      A ${r} ${r} 0 0 1 0 ${calculatedHeight - r} 
                      Z`;

    // 2. Generate Camera Cutout Path (Inner) - Counter-Clockwise winding
    const cutoutPath = createCameraCutoutCCW(config, baseWidth, calculatedHeight);

    // 3. Create the compound mask
    const combinedPathString = `${bodyPath} ${cutoutPath}`;
    const mask = new fabric.Path(combinedPathString, {
      fillRule: 'evenodd',
      absolutePositioned: true,
      objectCaching: false,
      originX: 'left',
      originY: 'top',
      left: 0,
      top: 0,
      selectable: false,
      evented: false
    });

    // 4. Create the Phone Body object using strictly the body path
    const phoneBody = new fabric.Path(bodyPath, {
      originX: 'left',
      originY: 'top',
      left: 0,
      top: 0,
      fill: '#ffffff',
      stroke: '#e5e7eb',
      strokeWidth: 1,
      selectable: false,
      evented: false,
      name: 'phone-body',
      shadow: new fabric.Shadow({
        color: 'rgba(0,0,0,0.15)',
        blur: 18,
        offsetX: 0,
        offsetY: 6
      })
    });

    // Apply combination mask TO the phoneBody object
    phoneBody.clipPath = mask;

    // Apply mask to the entire canvas so all design objects are clipped to phone shape
    fabricCanvas.clipPath = mask;

    // Add the clipped phone body to the canvas at the lowest index
    fabricCanvas.insertAt(phoneBody, 0);

    // Bring all non-phone-body objects to front
    fabricCanvas.getObjects().forEach(obj => {
      if (obj.name !== 'phone-body') {
        obj.bringToFront();
      }
    });

    fabricCanvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
    fabricCanvas.calcOffset();
    fabricCanvas.requestRenderAll();
  }

  // Clear legacy overlays
  designSheet.querySelectorAll('.model-front').forEach(el => el.remove());
}

/**
 * Generates SVG path string for camera cutout in COUNTER-CLOCKWISE winding.
 * CCW is required to reliably create holes with the evenodd fill rule.
 */
function createCameraCutoutCCW(config, width, height) {
  const w = width * config.cutout.w;
  const h = height * config.cutout.h;
  const x = width * config.cutout.left;
  const y = height * config.cutout.top;
  const r = config.cutoutRadius || 0;

  if (config.cutoutType === "circle") {
    const rx = w / 2;
    const ry = h / 2;
    const cx = x + rx;
    // Counter-clockwise circle: sweep-flag = 0
    return `M ${cx} ${y} 
            A ${rx} ${ry} 0 1 0 ${cx} ${y + h} 
            A ${rx} ${ry} 0 1 0 ${cx} ${y} Z`;
  }

  // rounded-square or rounded-rect: Counter-Clockwise (sweep-flag = 0)
  return `M ${x + r} ${y} 
          A ${r} ${r} 0 0 0 ${x} ${y + r} 
          L ${x} ${y + h - r} 
          A ${r} ${r} 0 0 0 ${x + r} ${y + h} 
          L ${x + w - r} ${y + h} 
          A ${r} ${r} 0 0 0 ${x + w} ${y + h - r} 
          L ${x + w} ${y + r} 
          A ${r} ${r} 0 0 0 ${x + w - r} ${y} Z`;
}


// ===== STATE MANAGEMENT =====
let backgroundLayer = null;
let designLayer = null; // Legacy, will be replaced by fabricCanvas
let fabricCanvas = null;
let zoomLevel = 0.5;

const EditorState = {
  history: [],
  pointer: -1,
  max: 50,
  selectedId: null
};

// ===== DEBOUNCE UTILITY =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

let isPremium = false;

// ===== SIDEBAR NAVIGATION =====
function showPanel(panelId) {
  const subPanel = document.getElementById('sub-panel');
  const target = document.getElementById('panel-' + panelId);
  
  if (!target) return;

  // If clicking the ALREADY ACTIVE panel, toggle it closed
  if (target.classList.contains('active') && subPanel && subPanel.classList.contains('active')) {
    subPanel.classList.remove('active');
    target.classList.remove('active');
    // Deactivate all buttons
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    return;
  }

  // Otherwise, hide others and show this one
  document.querySelectorAll('.panel-content').forEach(p => {
    p.classList.remove('active');
    p.style.display = ''; 
  });
  document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));

  target.classList.add('active');
  if (subPanel) subPanel.classList.add('active');

  // Activate button
  const btn = document.querySelector(`.menu-btn[onclick*="'${panelId}'"]`);
  if (btn) btn.classList.add('active');
}

// ===== CANVAS ZOOM CONTROLS (Floating Toolbar) =====

function applyZoom() {
  const wrapper = document.querySelector(".zoom-wrapper");
  const zoomText = document.getElementById("zoom-level");

  if (wrapper) {
    // Use CSS transform for visual zoom only
    wrapper.style.transform = `scale(${zoomLevel})`;
    wrapper.style.transformOrigin = "top center";

    // Update zoom percentage text
    if (zoomText) {
      zoomText.innerText = Math.round(zoomLevel * 100) + "%";
    }
  }

  // CRITICAL: Re-calculate Fabric.js canvas offset after CSS transform changes.
  // Without this, Fabric.js uses stale mouse offset and drag becomes inaccurate.
  if (fabricCanvas) {
    // Use a short delay to let the browser apply the CSS transform first
    setTimeout(() => {
      fabricCanvas.calcOffset();
    }, 50);
  }
}



function zoomIn() {
  if (zoomLevel < 3) {
    zoomLevel += 0.1;
    applyZoom();
  }
}

function zoomOut() {
  if (zoomLevel > 0.2) {
    zoomLevel -= 0.1;
    applyZoom();
  }
}

function fitToScreen() {
  const container = document.querySelector(".canvas-area");
  const sheet = document.getElementById("design-sheet");
  if (!container || !sheet) return;

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const sheetWidth = sheet.offsetWidth;
  const sheetHeight = sheet.offsetHeight;

  const scaleX = (containerWidth / sheetWidth) * 0.9;
  const scaleY = (containerHeight / sheetHeight) * 0.9;

  zoomLevel = Math.min(scaleX, scaleY);
  applyZoom();
}



// ===== HISTORY (Undo/Redo) =====
function saveState() {
  if (!fabricCanvas) return;

  // Capture Fabric Canvas JSON and Background Layer state
  const propertiesToInclude = ['name', 'lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'hasControls', 'selectable', 'evented', 'id'];
  const canvasJson = JSON.stringify(fabricCanvas.toJSON(propertiesToInclude));
  const bgColor = backgroundLayer ? backgroundLayer.style.background : "";

  // Truncate redo history
  if (EditorState.pointer < EditorState.history.length - 1) {
    EditorState.history = EditorState.history.slice(0, EditorState.pointer + 1);
  }

  EditorState.history.push({ fabric: canvasJson, bg: bgColor });
  if (EditorState.history.length > EditorState.max) EditorState.history.shift();

  EditorState.pointer = EditorState.history.length - 1;

  // Auto-save to LocalStorage to restore after navigation
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  localStorage.setItem(`savedDesign_${userId}`, JSON.stringify({ fabric: canvasJson, bg: bgColor }));

  updatePreview();
}

function undo() {
  if (EditorState.pointer > 0) {
    EditorState.pointer--;
    restoreState(EditorState.history[EditorState.pointer]);
  }
}

function redo() {
  if (EditorState.pointer < EditorState.history.length - 1) {
    EditorState.pointer++;
    restoreState(EditorState.history[EditorState.pointer]);
  }
}

function restoreState(state) {
  if (!state || !fabricCanvas) return;

  // Restore Background
  if (backgroundLayer) {
    backgroundLayer.style.background = state.bg;
  }

  // Restore Fabric Canvas
  fabricCanvas.loadFromJSON(state.fabric, () => {
    fabricCanvas.renderAll();
    updatePropertiesPanel(null); // Deselect
    updatePreview();
  });
}


// ===== SELECTION & PROPERTIES =====
/*
function attachElementSelection() {
  // Legacy selection disabled in favor of Fabric.js
}
*/

function selectElement(el) {
  // Clear previous visual
  document.querySelectorAll('.selected-element').forEach(x => x.classList.remove('selected-element'));

  if (!el) {
    // Deselect logic
    updatePropertiesPanel(null);
    removeTextToolbar();
    hideSelectionUI();
    return;
  }

  // Select logic
  el.classList.add('selected-element');

  if (el.classList.contains("text-element")) {
    showTextToolbar(el);
  } else {
    removeTextToolbar();
  }

  // Sync Selection UI
  syncSelectionUI(el);

  // Switch to Properties Panel in Sidebar automatically
  showPanel('properties');

  // Identify type
  let type = 'generic';
  if (el.classList.contains('text-element')) type = 'text';
  else if (el.tagName === 'IMG' || el.querySelector('img')) type = 'image';

  updatePropertiesPanel(type, el);
}

function updatePropertiesPanel(type, el) {
  const panel = document.getElementById('panel-properties');
  if (!panel) return;

  const noSel = panel.querySelector('.no-selection');
  const textGroup = document.getElementById('prop-text');
  const imgGroup = document.getElementById('prop-image');
  const actions = document.getElementById('prop-actions');

  // Reset
  noSel.classList.remove('hidden');
  textGroup.classList.add('hidden');
  imgGroup.classList.add('hidden');
  if (actions) actions.classList.add('hidden');

  if (type && el) {
    noSel.classList.add('hidden');
    if (actions) actions.classList.remove('hidden');

    if (type === 'text') {
      textGroup.classList.remove('hidden');
      document.getElementById('prop-text-input').value = el.innerText;
      document.getElementById('prop-size').value = parseInt(el.style.fontSize) || 16;
      document.getElementById('prop-font').value = el.style.fontFamily || 'Inter';
      document.getElementById('prop-color').value = el.style.color || '#000000';
    } else if (type === 'image') {
      imgGroup.classList.remove('hidden');
    }
  }
}


// ===== CONTENT CREATION =====
let zIndexCounter = 600; // Start above safe area (500)

function uploadImageToCanvas(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    // Create image on canvas
    addImageToCanvasFromSrc(e.target.result);

    // Add to sidebar search/recent grid
    const grid = document.getElementById('upload-preview-grid');
    if (grid) {
      const thumb = document.createElement('img');
      thumb.src = e.target.result;
      thumb.className = 'upload-item';
      thumb.alt = file.name || 'uploaded image';
      thumb.onclick = (event) => {
        event.stopPropagation();
        addImageToCanvasFromSrc(thumb.src);
      };
      grid.prepend(thumb); // Add to top (Recent)
    }
  };
  reader.readAsDataURL(file);
}

function addImageToCanvasFromSrc(src) {
  if (!fabricCanvas) return;

  fabric.Image.fromURL(src, function (img) {
    const scale = Math.max(
      fabricCanvas.width / img.width,
      fabricCanvas.height / img.height
    );
    img.scale(scale);
    img.set({
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      originX: "center",
      originY: "center",
      name: 'uploaded-image'
    });

    fabricCanvas.setActiveObject(img);

    if (designLayer) {
      designLayer.add(img);
    } else {
      fabricCanvas.add(img);
    }

    fabricCanvas.renderAll();
    saveState();
  });
}

// Attach upload listener
document.addEventListener('DOMContentLoaded', () => {
  const uploadInput = document.getElementById("uploadImage");
  if (uploadInput) {
    uploadInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        uploadImageToCanvas(e.target.files[0]);
      }
    });
  }
});

function addText(text = "Edit Me", fontSize = 32, fontFamily = "Inter", fill = "#000") {
  if (!fabricCanvas) return;

  const textObj = new fabric.Textbox(text, {
    left: fabricCanvas.width / 2,
    top: fabricCanvas.height / 2,
    originX: "center",
    originY: "center",
    fontSize: parseInt(fontSize) || 32,
    fill: fill || "#000",
    fontFamily: fontFamily || "Inter",
    name: 'text-element'
  });

  if (designLayer) {
    designLayer.add(textObj);
  } else {
    fabricCanvas.add(textObj);
  }

  fabricCanvas.setActiveObject(textObj);
  fabricCanvas.renderAll();
  saveState();
}

function enableTextEditing(el) {
  el.contentEditable = true;
  el.focus();
  // document.execCommand is deprecated but user requested it. 
  // It's still supported in many browsers for this exact purpose.
  document.execCommand("selectAll", false, null);

  // when finished editing
  el.addEventListener("blur", function () {
    el.contentEditable = false;
    saveState();
  }, { once: true });
}

function showTextToolbar(el) {
  // Logic removed per user request (Duplicate, Delete, Rotate bar)
  removeTextToolbar();
}

function removeTextToolbar() {
  const t = document.getElementById("textToolbar");
  if (t) t.remove();
}

function addStylishText(styleType) {
  switch (styleType) {
    case 'modern':
      addText('Modern Style', '28px', 'Poppins', '#1e293b');
      break;
    case 'script':
      addText('Stylish Handwriting', '32px', 'Cursive', '#e11d48');
      break;
    case 'glow':
      addText('Neon Glow', '36px', 'Poppins', '#38bdf8');
      const elGlow = document.querySelector('.selected-element');
      if (elGlow) {
        elGlow.style.textShadow = '0 0 10px #38bdf8, 0 0 20px #38bdf8';
        elGlow.style.fontWeight = 'bold';
      }
      break;
    case 'outline':
      addText('Bold Border', '40px', 'Inter', '#ffffff');
      const elOutline = document.querySelector('.selected-element');
      if (elOutline) {
        elOutline.style.webkitTextStroke = '1.5px #000';
        elOutline.style.fontWeight = '900';
      }
      break;
  }
}

function addShape(shape) {
  if (!fabricCanvas) return;

  let shapeObj;
  const common = {
    left: fabricCanvas.width / 2,
    top: fabricCanvas.height / 2,
    fill: '#333',
    originX: 'center',
    originY: 'center'
  };

  if (shape === 'circle') {
    shapeObj = new fabric.Circle({ ...common, radius: 40 });
  } else if (shape === 'square') {
    shapeObj = new fabric.Rect({ ...common, width: 80, height: 80 });
  } else if (shape === 'rounded-rect') {
    shapeObj = new fabric.Rect({ ...common, width: 100, height: 60, rx: 15, ry: 15 });
  } else if (shape === 'heart') {
    // Basic heart path for Fabric
    const path = "M 12 21.35 l -1.45 -1.32 C 5.4 15.36 2 12.28 2 8.5 C 2 5.42 4.42 3 7.5 3 c 1.74 0 3.41 .81 4.5 2.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 c 0 3.78 -3.4 6.86 -8.55 11.54 L 12 21.35 z";
    shapeObj = new fabric.Path(path, { ...common, scaleX: 3.5, scaleY: 3.5 });
  } else {
    // Default fallback
    shapeObj = new fabric.Rect({ ...common, width: 50, height: 50 });
  }

  shapeObj.set('name', 'shape');

  if (designLayer) {
    designLayer.add(shapeObj);
  } else {
    fabricCanvas.add(shapeObj);
  }

  fabricCanvas.setActiveObject(shapeObj);
  fabricCanvas.renderAll();
  saveState();
}

/**
 * Adds a sticker to the canvas.
 * @param {string|object} sticker The sticker content or object.
 * @param {string} type 'emoji', 'image', or 'text'.
 */
function addSticker(sticker, type = 'emoji') {
  if (!fabricCanvas) return;

  let stickerObj;
  const common = {
    left: fabricCanvas.width / 2,
    top: fabricCanvas.height / 2,
    originX: "center",
    originY: "center",
    name: 'sticker'
  };

  if (type === 'emoji') {
    stickerObj = new fabric.Text(sticker, {
      ...common,
      fontSize: 80,
    });
    addAndSelect(stickerObj);
  } else if (type === 'image') {
    fabric.Image.fromURL(sticker, function (img) {
      img.set(common);
      img.scaleToWidth(120);
      addAndSelect(img);
    }, { crossOrigin: 'anonymous' });
  } else if (type === 'text') {
    // For text stickers (quotes)
    stickerObj = new fabric.Textbox(sticker.content || sticker, {
      ...common,
      width: 200,
      fontSize: 24,
      fontFamily: sticker.font || 'Poppins',
      fill: sticker.color || '#333',
      textAlign: 'center',
      fontWeight: 'bold'
    });
    addAndSelect(stickerObj);
  }
}

function addAndSelect(obj) {
  if (designLayer) {
    designLayer.add(obj);
  } else {
    fabricCanvas.add(obj);
  }
  fabricCanvas.setActiveObject(obj);
  fabricCanvas.renderAll();
  saveState();
  if (typeof showToast === 'function') showToast("Sticker Added! ✨", "fa-smile");
}

function switchStickerCategory(category) {
  // Update active tab UI
  document.querySelectorAll('.sticker-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.innerText.toLowerCase() === category.toLowerCase() || 
        (category === 'text' && tab.innerText.toLowerCase() === 'quotes')) {
      tab.classList.add('active');
    }
  });

  renderStickers(category);
}

function renderStickers(category) {
  const grid = document.getElementById('dynamic-sticker-grid');
  if (!grid || !STICKER_LIBRARY) return;

  grid.innerHTML = '';

  // Add "Clear" button first
  const clearBtn = document.createElement('div');
  clearBtn.className = 'sticker-item clear-tool-item';
  clearBtn.title = 'Remove Stickers';
  clearBtn.innerHTML = '<i class="fas fa-ban"></i>';
  clearBtn.onclick = clearElements;
  clearBtn.style.cssText = 'aspect-ratio: 1/1; border-radius: 12px; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; background: #fff1f2; color: #ef4444; cursor: pointer; border: 1px solid #fecaca;';
  grid.appendChild(clearBtn);

  const stickers = STICKER_LIBRARY[category] || [];

  stickers.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'sticker-btn';
    if (s.type === 'text') btn.classList.add('quote-sticker');
    
    if (s.type === 'emoji') {
      btn.innerText = s.content;
    } else if (s.type === 'image') {
      btn.innerHTML = `<img src="${s.content}" style="width: 100%; height: 100%; object-fit: contain;">`;
    } else if (s.type === 'text') {
      btn.innerText = s.content;
      btn.style.fontFamily = s.font || 'Poppins';
      btn.style.color = s.color || '#333';
    }

    btn.onclick = () => addSticker(s.type === 'text' ? s : s.content, s.type);
    grid.appendChild(btn);
  });
}

// ===== DRAG LOGIC (Simplified) =====
function isNearCameraCutout(x, y, elW, elH) {
  // Use coordinates from getCameraSafePosition
  const cut = { x: 0, y: 0, w: 140, h: 155 }; // Slightly larger buffer for safety
  const elLeft = x - elW / 2;
  const elTop = y - elH / 2;
  const elRight = x + elW / 2;
  const elBottom = y + elH / 2;

  // Check if element box overlaps with top-left camera zone (common for iPhones/Samsungs)
  return elLeft < cut.w && elTop < cut.h;
}

/*
function makeDraggable(el) {
  // Legacy drag system disabled in favor of Fabric.js
}
*/

// ===== SAFE AREA LOGIC =====
function checkSafeArea(el) {
  if (!el) return;
  const sheet = document.getElementById('design-sheet');
  const sheetW = sheet.clientWidth;
  const sheetH = sheet.clientHeight;
  const padding = 25;

  // Element bounds (relative to sheet)
  // We use offset positions. Note: transform translate(-50%, -50%) makes offsetLeft/Top center-based visually
  // BUT offsetLeft is top-left corner of the element's box (before transform?)
  // Actually, standard CSS positioning: left/top are the anchor points.
  // With transform:translate(-50%,-50%), the anchor (left/top) IS the center.
  // So el.offsetLeft IS the center X, el.offsetTop IS the center Y.

  const w = el.offsetWidth;
  const h = el.offsetHeight;
  const x = el.offsetLeft;
  const y = el.offsetTop;

  // Calculate edges
  const left = x - w / 2;
  const right = x + w / 2;
  const top = y - h / 2;
  const bottom = y + h / 2;

  // Check bounds
  // We are out of bounds if ANY part crosses the 10px line
  const out = (left < padding) || (right > sheetW - padding) || (top < padding) || (bottom > sheetH - padding);

  if (out) {
    el.classList.add('out-of-bounds');
  } else {
    el.classList.remove('out-of-bounds');
  }
}

// ===== PROPERTY UPDATES =====
function updateSelectedText(text) {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj && (obj.type === 'textbox' || obj.type === 'i-text' || obj.type === 'text')) {
    obj.set('text', text);
    fabricCanvas.renderAll();
    saveState();
  }
}

function updateSelectedFont(font) {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj && (obj.type === 'textbox' || obj.type === 'i-text' || obj.type === 'text')) {
    obj.set('fontFamily', font);
    fabricCanvas.renderAll();
    saveState();
  }
}

function updateSelectedSize(size) {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj && (obj.type === 'textbox' || obj.type === 'i-text' || obj.type === 'text')) {
    obj.set('fontSize', parseInt(size));
    fabricCanvas.renderAll();
    saveState();
  }
}

function updateSelectedColor(color) {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj) {
    if (obj.type === 'textbox' || obj.type === 'i-text' || obj.type === 'text' || obj.name === 'shape') {
      obj.set('fill', color);
    } else {
      obj.set('fill', color);
    }
    fabricCanvas.renderAll();
    saveState();
  }
}
function updateOpacity(val) {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj) {
    obj.set('opacity', val / 100);
    fabricCanvas.renderAll();
    saveState();
  }
}
// ===== TEXT STYLE FUNCTIONS =====
function setTextAlign(align) {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj && obj.type === 'textbox') {
    obj.set('textAlign', align);
    fabricCanvas.renderAll();
    saveState();
  }
}

function toggleTextBold() {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj && obj.type === 'textbox') {
    const isBold = obj.get('fontWeight') === 'bold';
    obj.set('fontWeight', isBold ? 'normal' : 'bold');
    fabricCanvas.renderAll();
    saveState();
  }
}

function toggleTextItalic() {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj && obj.type === 'textbox') {
    const isItalic = obj.get('fontStyle') === 'italic';
    obj.set('fontStyle', isItalic ? 'normal' : 'italic');
    fabricCanvas.renderAll();
    saveState();
  }
}

function toggleTextShadow() {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj && obj.type === 'textbox') {
    const hasShadow = !!obj.get('shadow');
    obj.set('shadow', hasShadow ? null : {
      color: 'rgba(0,0,0,0.3)',
      blur: 4,
      offsetX: 2,
      offsetY: 2
    });
    fabricCanvas.renderAll();
    saveState();
  }
}

function toggleTextStroke() {
  const obj = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (obj && obj.type === 'textbox') {
    const hasStroke = !!obj.get('stroke');
    obj.set('stroke', hasStroke ? null : '#000000');
    obj.set('strokeWidth', hasStroke ? 0 : 1);
    fabricCanvas.renderAll();
    saveState();
  }
}

function updateLetterSpacing(value) {
  const activeObject = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (activeObject && activeObject.type === 'textbox') {
    activeObject.set('charSpacing', value * 10);
    fabricCanvas.renderAll();
    saveState();
  }
}

function updateLineHeight(value) {
  const activeObject = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (activeObject && activeObject.type === 'textbox') {
    activeObject.set('lineHeight', value / 100);
    fabricCanvas.renderAll();
    saveState();
  }
}

function deleteSelected() {
  const activeObject = fabricCanvas ? fabricCanvas.getActiveObject() : null;
  if (activeObject) {
    fabricCanvas.remove(activeObject);
    fabricCanvas.discardActiveObject();

    // Explicitly hide property panels after deletion
    const propEmpty = document.getElementById('prop-empty');
    const propText = document.getElementById('prop-text');
    const propImage = document.getElementById('prop-image');
    const propActions = document.getElementById('prop-actions');

    if (propEmpty) propEmpty.classList.remove('hidden');
    if (propText) propText.classList.add('hidden');
    if (propImage) propImage.classList.add('hidden');
    if (propActions) propActions.classList.add('hidden');

    fabricCanvas.renderAll();
    saveState();
  }
}


// ===== MIRROR PREVIEW =====
const updatePreview = debounce(function () {
  const sheet = document.getElementById('design-sheet');
  const mirror = document.getElementById('mirror-container');

  if (!sheet || !mirror) return;

  mirror.innerHTML = '';

  const clone = sheet.cloneNode(true);
  clone.removeAttribute('id');

  // If we have a fabric canvas, we need to sync its content to the clone
  const cloneCanvas = clone.querySelector('#fabric-canvas');
  if (cloneCanvas && fabricCanvas) {
    const dataUrl = fabricCanvas.toDataURL();
    const img = document.createElement('img');
    img.src = dataUrl;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.position = 'absolute';
    img.style.inset = '0';
    cloneCanvas.replaceWith(img);
  }

  // Handle Premium Badge in Preview
  if (isPremium) {
    const badge = document.createElement('div');
    badge.innerHTML = '<i class="fas fa-crown"></i> PREMIUM DESIGN';
    badge.className = 'premium-badge-preview';
    badge.style.position = 'absolute';
    badge.style.bottom = '10px';
    badge.style.left = '50%';
    badge.style.transform = 'translateX(-50%)';
    badge.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
    badge.style.color = 'white';
    badge.style.padding = '4px 12px';
    badge.style.borderRadius = '999px';
    badge.style.fontSize = '8px';
    badge.style.fontWeight = 'bold';
    badge.style.zIndex = '1000';
    badge.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    clone.appendChild(badge);
  }

  const mirrorWidth = mirror.clientWidth;
  const sheetWidth = sheet.clientWidth;
  const sheetHeight = sheet.clientHeight;
  const scale = mirrorWidth / sheetWidth;

  mirror.style.height = (sheetHeight * scale) + 'px';

  clone.style.transform = `scale(${scale})`;
  clone.style.transformOrigin = "top left";
  clone.style.margin = "0";

  mirror.appendChild(clone);
}, 150);

function togglePremiumDesign() {
  isPremium = !isPremium;
  const btn = document.getElementById('premiumToggleBtn');
  if (btn) {
    if (isPremium) {
      btn.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
      btn.style.color = 'white';
      btn.querySelector('i').className = 'fas fa-star';
      showToast("Marked as Premium Design ⭐");
    } else {
      btn.style.background = '';
      btn.style.color = '';
      btn.querySelector('i').className = 'far fa-star';
      showToast("Premium mark removed");
    }
  }
  updatePreview();
}

function toggleMobilePreview() {
  const panel = document.querySelector('.right-panel');
  const btn = document.querySelector('.mobile-preview-toggle i');
  if (panel) {
    panel.classList.toggle('active');
    if (btn) {
      btn.className = panel.classList.contains('active') ? 'fas fa-eye-slash' : 'fas fa-eye';
    }
  }
}



// ===== BACKGROUNDS =====
// ===== ADVANCED BACKGROUND SYSTEM =====

const recentContainer = document.getElementById("recentColors");

let recentColors = [];

// ===== Add Recent Color =====
function addRecentColor(color) {
  if (!designLayer) return;

  if (recentColors.includes(color)) return;

  recentColors.unshift(color);
  if (recentColors.length > 6) recentColors.pop();

  renderRecentColors();
}

// ===== Render Recent Colors =====
function renderRecentColors() {
  if (!recentContainer) return;

  recentContainer.innerHTML = "";

  recentColors.forEach(color => {
    const div = document.createElement("div");
    div.className = "color";
    div.style.background = color;

    div.addEventListener("click", () => {
      applyDesignBackground(color);
      saveState();
      updatePreview();
    });

    recentContainer.appendChild(div);
  });
}

// ===== Solid Colors =====
document.querySelectorAll(".color[data-color]").forEach(el => {
  el.style.background = el.dataset.color;

  el.addEventListener("click", () => {
    applyDesignBackground(el.dataset.color);
    addRecentColor(el.dataset.color);
    saveState();
    updatePreview();
  });
});

// ===== Gradients =====
document.querySelectorAll(".gradient").forEach(el => {
  el.style.background = el.dataset.gradient;

  el.addEventListener("click", () => {
    applyDesignBackground(el.dataset.gradient);
    saveState();
    updatePreview();
  });
});

// ===== Custom Color Picker =====
const customColorInput = document.getElementById("customColor");

if (customColorInput) {
  customColorInput.addEventListener("input", (e) => {
    applyDesignBackground(e.target.value);
    addRecentColor(e.target.value);
    saveState();
    updatePreview();
  });
}

/**
 * Parses a CSS linear-gradient string and returns a fabric.Gradient object.
 * Supports angles (e.g., 45deg) and multiple color stops.
 */
function parseCSSGradient(cssString, width, height) {
  const match = cssString.match(/linear-gradient\((.*)\)/);
  if (!match) return cssString;

  const parts = match[1].split(/,(?![^(]*\))/).map(s => s.trim());
  let angle = 180; // Default to 'to bottom'
  let colorParts = parts;

  // Check if first part is angle or direction
  if (parts[0].includes('deg') || parts[0].includes('to ')) {
    const anglePart = parts[0];
    colorParts = parts.slice(1);

    if (anglePart.includes('deg')) {
      angle = parseFloat(anglePart);
    } else {
      // Basic support for 'to [direction]'
      if (anglePart === 'to top') angle = 0;
      else if (anglePart === 'to bottom') angle = 180;
      else if (anglePart === 'to left') angle = 270;
      else if (anglePart === 'to right') angle = 90;
      else if (anglePart === 'to top right') angle = 45;
      else if (anglePart === 'to bottom right') angle = 135;
      else if (anglePart === 'to bottom left') angle = 225;
      else if (anglePart === 'to top left') angle = 315;
    }
  }

  // Convert angle to coordinates
  const angleRad = (angle - 90) * (Math.PI / 180);
  const x1 = width / 2 - (Math.cos(angleRad) * width) / 2;
  const y1 = height / 2 - (Math.sin(angleRad) * height) / 2;
  const x2 = width / 2 + (Math.cos(angleRad) * width) / 2;
  const y2 = height / 2 + (Math.sin(angleRad) * height) / 2;

  // Parse color stops
  const colorStops = colorParts.map((part, index) => {
    const colorMatch = part.match(/(#[a-fA-F0-9]{3,8}|rgba?\(.*?\)|[a-zA-Z]+)/);
    const posMatch = part.match(/(\d+)%/);
    return {
      offset: posMatch ? parseFloat(posMatch[1]) / 100 : index / (colorParts.length - 1),
      color: colorMatch ? colorMatch[0] : '#000'
    };
  });

  return new fabric.Gradient({
    type: 'linear',
    coords: { x1, y1, x2, y2 },
    colorStops: colorStops
  });
}

function applyDesignBackground(fill) {
  if (!fabricCanvas) return;

  let backgroundFill = fill;
  if (typeof fill === 'string' && fill.includes('linear-gradient')) {
    backgroundFill = parseCSSGradient(fill, fabricCanvas.width, fabricCanvas.height);
  }

  // Remove existing background rect if any
  const existingBg = fabricCanvas.getObjects().find(obj => obj.name === 'design-bg');
  if (existingBg) fabricCanvas.remove(existingBg);

  const bg = new fabric.Rect({
    width: fabricCanvas.width,
    height: fabricCanvas.height,
    fill: backgroundFill,
    selectable: true,
    evented: true,
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    hasControls: false,
    name: 'design-bg',
    originX: 'left',
    originY: 'top',
    left: 0,
    top: 0
  });

  fabricCanvas.add(bg);
  // Send background behind phone-body but in front of nothing
  fabricCanvas.sendToBack(bg);
  // Phone body should be at index 0, bg at index 1 — swap if needed
  const phoneBody = fabricCanvas.getObjects().find(o => o.name === 'phone-body');
  if (phoneBody) fabricCanvas.sendToBack(phoneBody);
  fabricCanvas.renderAll();
}

// ===== Background Image Upload =====
const bgUploadInput = document.getElementById("bgUpload");

if (bgUploadInput) {
  bgUploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file || !fabricCanvas) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      fabric.Image.fromURL(event.target.result, (img) => {
        const scale = Math.max(
          fabricCanvas.width / img.width,
          fabricCanvas.height / img.height
        );
        img.set({
          width: img.width,
          height: img.height,
          scaleX: scale,
          scaleY: scale,
          originX: 'center',
          originY: 'center',
          left: fabricCanvas.width / 2,
          top: fabricCanvas.height / 2,
          selectable: true,
          evented: true,
          lockMovementX: true,
          lockMovementY: true,
          lockRotation: true,
          lockScalingX: true,
          lockScalingY: true,
          hasControls: false,
          name: 'design-bg-img'
        });

        // Remove existing bg images/colors
        const existingBg = fabricCanvas.getObjects().find(obj => obj.name === 'design-bg' || obj.name === 'design-bg-img');
        if (existingBg) fabricCanvas.remove(existingBg);

        fabricCanvas.add(img);
        // Send bg image behind all other objects
        fabricCanvas.sendToBack(img);
        const phoneBody = fabricCanvas.getObjects().find(o => o.name === 'phone-body');
        if (phoneBody) fabricCanvas.sendToBack(phoneBody);
        fabricCanvas.renderAll();
        saveState();
        updatePreview();
      });
    };

    reader.readAsDataURL(file);
  });
}

/**
 * CLEAR FUNCTIONS FOR TOOL PANELS
 */
function clearBackground() {
  if (!fabricCanvas) return;
  const bg = fabricCanvas.getObjects().find(obj => obj.name === 'design-bg');
  const bgImg = fabricCanvas.getObjects().find(obj => obj.name === 'design-bg-img');
  if (bg) fabricCanvas.remove(bg);
  if (bgImg) fabricCanvas.remove(bgImg);
  fabricCanvas.renderAll();
  saveState();
}

function clearElements() {
  if (!fabricCanvas) return;
  const items = fabricCanvas.getObjects().filter(obj =>
    obj.name === 'shape' || obj.name === 'sticker' || (obj.type === 'path' && obj.name !== 'phone-body')
  );
  items.forEach(item => fabricCanvas.remove(item));
  fabricCanvas.discardActiveObject();
  fabricCanvas.renderAll();
  saveState();
}

function clearAllText() {
  if (!fabricCanvas) return;
  const texts = fabricCanvas.getObjects().filter(obj =>
    obj.type === 'textbox' || obj.type === 'i-text' || obj.type === 'text' || obj.name === 'text-element'
  );
  texts.forEach(t => fabricCanvas.remove(t));
  fabricCanvas.discardActiveObject();
  fabricCanvas.renderAll();
  saveState();
  updatePropertyPanels();
}

function clearRecentUploads() {
  if (!fabricCanvas) return;
  const grid = document.getElementById('upload-preview-grid');
  if (grid) grid.innerHTML = '';
  const objects = fabricCanvas.getObjects();
  const uploads = [];
  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    if ((obj.type === 'image' || obj.name === 'uploaded-image') && obj.name !== 'phone-body' && obj.name !== 'design-bg-img') {
      uploads.push(obj);
    }
  }
  uploads.forEach(u => fabricCanvas.remove(u));
  fabricCanvas.discardActiveObject();
  fabricCanvas.renderAll();
  saveState();
}

function clearAI() {
  const promptArea = document.getElementById('ai-prompt');
  if (promptArea) promptArea.value = '';
}

// Ensure the original background reset button also works
const resetBgBtn = document.getElementById('resetBg');
if (resetBgBtn) {
  resetBgBtn.addEventListener('click', clearBackground);
}

// ===== Background Opacity =====
const bgOpacityInput = document.getElementById("bgOpacity");

if (bgOpacityInput) {
  bgOpacityInput.addEventListener("input", (e) => {
    const bg = fabricCanvas?.getObjects().find(obj => obj.name === 'design-bg' || obj.name === 'design-bg-img');
    if (bg) {
      bg.set('opacity', e.target.value);
      fabricCanvas.renderAll();
    }
    saveState();
    updatePreview();
  });
}

// ===== Background Blur =====
const bgBlurInput = document.getElementById("bgBlur");

if (bgBlurInput) {
  bgBlurInput.addEventListener("input", (e) => {
    const bgImg = fabricCanvas?.getObjects().find(obj => obj.name === 'design-bg-img');
    if (bgImg) {
      // Fabric blur filter
      bgImg.filters = [new fabric.Image.filters.Blur({ blur: e.target.value / 20 })];
      bgImg.applyFilters();
      fabricCanvas.renderAll();
    }
    saveState();
    updatePreview();
  });
}

// ===== Reset Background =====
// The resetBgBtn is now handled by the clearBackground function above.
// Keeping the original structure for other potential uses or if the button ID changes.
// const resetBgBtn = document.getElementById("resetBg");

// if (resetBgBtn) {
//   resetBgBtn.addEventListener("click", () => {
//     if (backgroundLayer) {
//       backgroundLayer.style.background = "transparent";
//       backgroundLayer.style.backgroundImage = "none";
//       backgroundLayer.style.opacity = "1";
//       backgroundLayer.style.filter = "none";
//     }

//     saveState();
//     updatePreview();
//   });
// }

function applyTemplate(type) {
  // Backwards-compatible single-string API (kept for simple callers)
  applyTemplateBySpec({ type: type });
}

// ===== Templates: Initialization & Handlers =====
function initTemplates() {
  // Setup search + card buttons
  const search = document.getElementById('template-search');

  if (search) search.addEventListener('input', () => applyTemplateFilter());

  // Find template cards in the vertical category sections
  const templateCards = document.querySelectorAll('.template-category .template-card');

  // Attach card click = apply template (no next / preview)
  templateCards.forEach(card => {
    card.addEventListener('click', (ev) => {
      ev.stopPropagation();
      applyTemplateFromCard(card);
    });
  });
}

function applyTemplateFilter() {
  const q = (document.getElementById('template-search')?.value || '').toLowerCase().trim();

  // Get all template cards in vertical category sections
  const cards = document.querySelectorAll('.template-category .template-card');
  let anyVisible = false;

  cards.forEach(card => {
    const title = (card.dataset.title || '').toLowerCase();
    const cat = (card.dataset.category || '').toLowerCase();
    const matchesQ = q === '' || title.includes(q) || cat.includes(q);
    const visible = matchesQ;
    card.style.display = visible ? '' : 'none';
    if (visible) anyVisible = true;
  });

  // Show/hide entire category sections based on whether they have visible cards
  document.querySelectorAll('.template-category').forEach(cat => {
    const visibleCards = cat.querySelectorAll('.template-card:not([style*="display: none"])');
    cat.style.display = visibleCards.length > 0 ? '' : 'none';
  });
}

function previewTemplate(card) {
  // Deprecated — preview removed per UX rules. Keep function for compatibility.
}

function applyTemplateFromCard(card) {
  const spec = {
    id: card.dataset.id,
    title: card.dataset.title,
    category: card.dataset.category,
    materials: (card.dataset.materials || '').split(',').map(s => s.trim()),
    orientation: card.dataset.orientation || 'center'
  };
  applyTemplateBySpec(spec);
}

function applyTemplateBySpec(spec) {
  const sheet = document.getElementById('design-sheet');
  if (!sheet) return;

  // 1) Clear canvas (remove design elements) — required by spec
  sheet.querySelectorAll('.design-element').forEach(e => e.remove());

  // 2) Get template ID for specific styling
  const templateId = spec.id || '';

  // 3) Apply category-based background with template-specific variations
  let bg = '#ffffff';
  const category = spec.category || '';

  // Template-specific backgrounds
  switch (templateId) {
    case 'tmpl-floral-1':
      bg = 'linear-gradient(180deg,#fff1f2,#fce7f3)';
      break;
    case 'tmpl-floral-2':
      bg = 'linear-gradient(135deg,#fdf2f8,#fce7f3,#fbcfe8)';
      break;
    case 'tmpl-aesthetic-1':
      bg = 'linear-gradient(135deg,#f5f7fa,#c3cfe2)';
      break;
    case 'tmpl-aesthetic-2':
      bg = 'linear-gradient(180deg,#e0c3fc,#8ec5fc)';
      break;
    case 'tmpl-quotes-1':
      bg = '#1e293b';
      break;
    case 'tmpl-quotes-2':
      bg = 'linear-gradient(180deg,#fff7ed,#ffedd5)';
      break;
    case 'tmpl-minimal-1':
    case 'tmpl-minimal-2':
      bg = 'linear-gradient(180deg,#ffffff,#f8fafc)';
      break;
    case 'tmpl-marble-1':
      bg = 'linear-gradient(180deg,#f5f5f5,#e0e0e0)';
      break;
    case 'tmpl-marble-2':
      bg = 'linear-gradient(180deg,#1a1a1a,#333)';
      break;
    case 'tmpl-gaming-1':
      bg = 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)';
      break;
    case 'tmpl-gaming-2':
      bg = 'linear-gradient(135deg,#1a1a2e,#16213e)';
      break;
    case 'tmpl-neon-1':
      bg = '#000000';
      break;
    case 'tmpl-neon-2':
      bg = 'linear-gradient(180deg,#0c0c0c,#1a1a2e)';
      break;
    case 'tmpl-cute-1':
      bg = 'linear-gradient(180deg,#ffe4e6,#fecdd3)';
      break;
    case 'tmpl-cute-2':
      bg = 'linear-gradient(180deg,#fef3c7,#fde68a)';
      break;
    case 'tmpl-abstract-1':
      bg = 'linear-gradient(45deg,#667eea,#764ba2)';
      break;
    case 'tmpl-abstract-2':
      bg = 'linear-gradient(180deg,#fbc2eb,#a6c1ee)';
      break;
    case 'tmpl-emoji-1':
      bg = 'linear-gradient(135deg,#fef3c7,#fef08a)';
      break;
    case 'tmpl-emoji-2':
      bg = 'linear-gradient(135deg,#e0f2fe,#bae6fd)';
      break;
    // New Floral Templates
    case 'tmpl-floral-3':
      bg = 'linear-gradient(180deg,#fdf2f8,#fce7f3,#fbcfe8)';
      break;
    case 'tmpl-floral-4':
      bg = 'linear-gradient(180deg,#fce7f3,#f9a8d4,#f472b6)';
      break;
    // Quote Templates
    case 'tmpl-quote-1':
      bg = 'linear-gradient(135deg,#1e293b,#0f172a)';
      break;
    case 'tmpl-quote-2':
      bg = 'linear-gradient(180deg,#fef3c7,#fde68a)';
      break;
    case 'tmpl-quote-3':
      bg = 'linear-gradient(180deg,#e0e7ff,#c7d2fe)';
      break;
    case 'tmpl-quote-4':
      bg = 'linear-gradient(135deg,#0f172a,#1e293b)';
      break;
    // Aesthetic Templates
    case 'tmpl-aesthetic-3':
      bg = 'linear-gradient(180deg,#fed7aa,#fdba74,#fb923c)';
      break;
    case 'tmpl-aesthetic-4':
      bg = 'linear-gradient(135deg,#f1f5f9,#cbd5e1)';
      break;
    // Cute Templates
    case 'tmpl-cute-3':
      bg = 'linear-gradient(180deg,#fecdd3,#fda4af,#fb7185)';
      break;
    case 'tmpl-cute-4':
      bg = 'linear-gradient(180deg,#e0f2fe,#7dd3fc,#38bdf8)';
      break;
    // Minimal Templates
    case 'tmpl-minimal-3':
      bg = 'linear-gradient(180deg,#fafafa,#e4e4e7)';
      break;
    case 'tmpl-minimal-4':
      bg = 'linear-gradient(180deg,#ffffff,#f1f5f9)';
      break;
    // Marble Templates
    case 'tmpl-marble-3':
      bg = 'linear-gradient(135deg,#18181b,#3f3f46,#52525b)';
      break;
    case 'tmpl-marble-4':
      bg = 'linear-gradient(135deg,#fdf2f8,#fbcfe8,#f9a8d4)';
      break;
    // Dark Premium Templates
    case 'tmpl-dark-1':
      bg = 'linear-gradient(180deg,#0c0a1d,#1a1635,#2d2654)';
      break;
    case 'tmpl-dark-2':
      bg = 'linear-gradient(135deg,#0f0f0f,#1c1917,#292524)';
      break;
    case 'tmpl-dark-3':
      bg = 'linear-gradient(180deg,#1c1917,#292524,#44403c)';
      break;
    case 'tmpl-dark-4':
      bg = 'linear-gradient(135deg,#000000,#1e1b4b,#312e81)';
      break;
    // Abstract Templates
    case 'tmpl-abstract-3':
      bg = 'linear-gradient(135deg,#a18cd1,#fbc2eb,#fad0c4)';
      break;
    case 'tmpl-abstract-4':
      bg = 'linear-gradient(180deg,#ff9a9e,#fecfef,#fecfef)';
      break;
    // Cultural Templates
    case 'tmpl-cultural-1':
      bg = 'linear-gradient(135deg,#7c3aed,#c084fc,#e879f9)';
      break;
    case 'tmpl-cultural-2':
      bg = 'linear-gradient(180deg,#fef3c7,#fcd34d,#f59e0b)';
      break;
    case 'tmpl-cultural-3':
      bg = 'linear-gradient(135deg,#1e3a8a,#3b82f6,#60a5fa)';
      break;
    case 'tmpl-cultural-4':
      bg = 'linear-gradient(180deg,#b45309,#d97706,#f59e0b)';
      break;
    // Pattern Templates
    case 'tmpl-pattern-1':
      bg = 'repeating-linear-gradient(45deg,#1e293b 0px,#1e293b 10px,#475569 10px,#475569 20px)';
      break;
    case 'tmpl-pattern-2':
      bg = 'linear-gradient(90deg,#e2e8f0 1px,transparent 1px),linear-gradient(180deg,#e2e8f0 1px,transparent 1px)';
      break;
    case 'tmpl-pattern-3':
      bg = 'radial-gradient(circle at 50% 50%,#06b6d4,#0891b2,#0e7490)';
      break;
    case 'tmpl-pattern-4':
      bg = 'repeating-linear-gradient(0deg,#cbd5e1 0px,#cbd5e1 1px,transparent 1px,transparent 30px)';
      break;
    // New Templates - Floral
    case 'tmpl-floral-5':
      bg = 'linear-gradient(180deg,#ecfeff,#cffafe,#a5f3fc)';
      break;
    case 'tmpl-floral-6':
      bg = 'linear-gradient(135deg,#fdf2f8,#fbcfe8,#f9a8d4)';
      break;
    // New Templates - Quotes
    case 'tmpl-quote-5':
      bg = 'linear-gradient(180deg,#fefce8,#fef9c3)';
      break;
    case 'tmpl-quote-6':
      bg = 'linear-gradient(180deg,#f0fdf4,#dcfce7)';
      break;
    // New Templates - Aesthetic
    case 'tmpl-aesthetic-5':
      bg = 'linear-gradient(180deg,#f1f5f9,#e2e8f0)';
      break;
    case 'tmpl-aesthetic-6':
      bg = 'linear-gradient(180deg,#f0fdf4,#dcfce7,#bbf7d0)';
      break;
    // New Templates - Cute
    case 'tmpl-cute-5':
      bg = 'linear-gradient(180deg,#f0f9ff,#e0f2fe,#bae6fd)';
      break;
    case 'tmpl-cute-6':
      bg = 'linear-gradient(180deg,#fff1f2,#fecdd3,#f9a8d4)';
      break;
    // New Templates - Minimal
    case 'tmpl-minimal-5':
      bg = '#ffffff';
      break;
    case 'tmpl-minimal-6':
      bg = 'linear-gradient(180deg,#27272a,#18181b)';
      break;
    // New Templates - Marble
    case 'tmpl-marble-5':
      bg = 'linear-gradient(135deg,#064e3b,#065f46,#047857)';
      break;
    case 'tmpl-marble-6':
      bg = 'linear-gradient(135deg,#1e3a8a,#1e40af,#1d4ed8)';
      break;
    // New Templates - Dark
    case 'tmpl-dark-5':
      bg = '#000000';
      break;
    case 'tmpl-dark-6':
      bg = 'linear-gradient(180deg,#1e1b4b,#312e81,#4338ca)';
      break;
    // New Templates - Abstract
    case 'tmpl-abstract-5':
      bg = 'linear-gradient(180deg,#0ea5e9,#38bdf8,#7dd3fc)';
      break;
    case 'tmpl-abstract-6':
      bg = 'linear-gradient(180deg,#f97316,#fb923c,#fdba74)';
      break;
    // New Templates - Cultural
    case 'tmpl-cultural-5':
      bg = 'linear-gradient(135deg,#1d4ed8,#3b82f6,#60a5fa)';
      break;
    case 'tmpl-cultural-6':
      bg = 'linear-gradient(135deg,#dc2626,#ea580c,#f59e0b)';
      break;
    // New Templates - Pattern
    case 'tmpl-pattern-5':
      bg = 'radial-gradient(#94a3b8 1px,transparent 1px)';
      break;
    case 'tmpl-pattern-6':
      bg = 'repeating-linear-gradient(90deg,#e2e8f0 0px,#e2e8f0 2px,transparent 2px,transparent 20px)';
      break;
    default:
      // Category-based fallback
      if (category === 'minimal') bg = '#ffffff';
      else if (category === 'floral') bg = 'linear-gradient(180deg,#fff7ed,#fff1f2)';
      else if (category === 'abstract') bg = 'linear-gradient(135deg,#fef3c7,#fee2e2)';
      else if (category === 'gaming') bg = 'linear-gradient(135deg,#0f0c29,#302b63)';
      else if (category === 'neon') bg = '#000000';
      else if (category === 'cute') bg = 'linear-gradient(180deg,#ffe4e6,#fecdd3)';
      else if (category === 'marble') bg = 'linear-gradient(180deg,#f5f5f5,#e0e0e0)';
      else if (category === 'quotes') bg = '#1e293b';
      else if (category === 'aesthetic') bg = 'linear-gradient(135deg,#f5f7fa,#c3cfe2)';
      else if (category === 'emoji') bg = 'linear-gradient(135deg,#fef3c7,#fef08a)';
      else if (category === 'dark') bg = 'linear-gradient(180deg,#0c0a1d,#1a1635)';
      else if (category === 'cultural') bg = 'linear-gradient(135deg,#7c3aed,#c084fc)';
      else if (category === 'pattern') bg = 'linear-gradient(135deg,#e2e8f0,#cbd5e1)';
  }

  // 4) Apply the resolved background with the new Design Layer system
  applyDesignBackground(bg);

  // 5) Add template elements as Fabric objects inside Design Layer
  const created = [];
  const zIndexCounter = 100;

  // Floral Templates
  if (templateId === 'tmpl-floral-1' || templateId === 'tmpl-floral-2') {
    const textObj = new fabric.Textbox(templateId === 'tmpl-floral-2' ? 'Rose Gold' : 'SPRING\nCOLLECTION', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.7,
      fontSize: templateId === 'tmpl-floral-2' ? 18 : 12,
      fontFamily: 'Georgia, serif',
      fill: templateId === 'tmpl-floral-2' ? '#9d174d' : '#be185d',
      fontStyle: templateId === 'tmpl-floral-2' ? 'italic' : 'normal',
      fontWeight: templateId === 'tmpl-floral-2' ? '700' : '600',
      textAlign: 'center',
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(textObj);
    created.push(textObj);
  }

  // Aesthetic Templates
  else if (templateId === 'tmpl-aesthetic-1' || templateId === 'tmpl-aesthetic-2') {
    const circle = new fabric.Circle({
      radius: 30,
      fill: 'rgba(255,255,255,0.8)',
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.45,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(circle);
    created.push(circle);

    if (templateId === 'tmpl-aesthetic-2') {
      const textEl2 = new fabric.Textbox('PASTEL', { // Renamed to textEl2 to avoid redeclaration
        left: fabricCanvas.width / 2,
        top: fabricCanvas.height * 0.75,
        fontSize: 14,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        fill: '#ffffff',
        shadow: '0 1px 3px rgba(0,0,0,0.2)',
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
      });
      designLayer.add(textEl2);
      created.push(textEl2);
    }
  }

  // Quotes Templates
  else if (templateId === 'tmpl-quotes-1' || templateId === 'tmpl-quotes-2') {
    const textEl = new fabric.Textbox(templateId === 'tmpl-quotes-1' ? '"DREAM\nBIG"' : '"CREATE\nEVERY DAY"', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: 18,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '700',
      fill: templateId === 'tmpl-quotes-1' ? '#ffffff' : '#9a3412',
      textAlign: 'center',
      lineHeight: 1.4,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Minimal Templates
  else if (templateId === 'tmpl-minimal-1' || templateId === 'tmpl-minimal-2') {
    const textEl = new fabric.Textbox('AB', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: 36,
      fontFamily: 'Inter, sans-serif',
      fontWeight: '300',
      fill: '#334155',
      charSpacing: 40, // Fabric uses charSpacing for letterSpacing
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Gaming Templates
  else if (templateId === 'tmpl-gaming-1' || templateId === 'tmpl-gaming-2') {
    const glow = new fabric.Circle({
      radius: 7.5,
      fill: '#0ff',
      shadow: '0 0 10px #0ff',
      left: fabricCanvas.width * 0.25,
      top: fabricCanvas.height * 0.25,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(glow);
    created.push(glow);

    const textEl = new fabric.Textbox(templateId === 'tmpl-gaming-1' ? '🎮' : '👾', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: 36,
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Neon Templates
  else if (templateId === 'tmpl-neon-1' || templateId === 'tmpl-neon-2') {
    const textEl = new fabric.Textbox(templateId === 'tmpl-neon-1' ? 'NEON' : 'ELECTRIC', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: 28,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '700',
      fill: templateId === 'tmpl-neon-1' ? '#f0f' : '#0ff',
      shadow: templateId === 'tmpl-neon-1' ? '0 0 10px #f0f, 0 0 20px #f0f' : '0 0 10px #0ff, 0 0 20px #0ff',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Cute Templates
  else if (templateId === 'tmpl-cute-1' || templateId === 'tmpl-cute-2') {
    const textEl = new fabric.Textbox(templateId === 'tmpl-cute-1' ? '🥰' : '🧸', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.45,
      fontSize: 48,
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);

    if (templateId === 'tmpl-cute-1') {
      const heart1 = new fabric.Textbox('❤️', {
        left: fabricCanvas.width * 0.2,
        top: fabricCanvas.height * 0.2,
        fontSize: 20,
        originX: 'center',
        originY: 'center',
      });
      designLayer.add(heart1);
      created.push(heart1);
    }
  }

  // Abstract Templates
  else if (templateId === 'tmpl-abstract-1' || templateId === 'tmpl-abstract-2') {
    // Fabric.js doesn't have direct blob shapes, use a circle and skew/scale or custom path
    const blob = new fabric.Circle({
      radius: 30,
      fill: 'rgba(255,255,255,0.3)',
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      originX: 'center',
      originY: 'center',
      scaleX: 1.2, // Simulate blob shape
      scaleY: 0.8,
      angle: 30,
    });
    designLayer.add(blob);
    created.push(blob);
  }

  // Emoji Pack Templates - Add multiple small emojis
  else if (templateId === 'tmpl-emoji-1' || templateId === 'tmpl-emoji-2') {
    const emojis = templateId === 'tmpl-emoji-1'
      ? ['🎉', '⭐', '❤️', '🔥', '💫', '🌈', '✨', '🎊', '💖']
      : ['😎', '😊', '🥰', '😇', '🤩', '😘', '❤️', '💯', '🔥', '⚡', '💪', '🌟'];

    const gridSize = templateId === 'tmpl-emoji-1' ? 3 : 4;
    const emojiSize = templateId === 'tmpl-emoji-1' ? 24 : 18;

    emojis.forEach((emoji, idx) => {
      const row = Math.floor(idx / gridSize);
      const col = idx % gridSize;
      const el = new fabric.Textbox(emoji, {
        left: fabricCanvas.width * (0.25 + col * 0.18),
        top: fabricCanvas.height * (0.25 + row * 0.18),
        fontSize: emojiSize,
        originX: 'center',
        originY: 'center',
      });
      designLayer.add(el);
      created.push(el);
    });
  }

  // Marble Templates
  else if (templateId === 'tmpl-marble-1' || templateId === 'tmpl-marble-2') {
    const marbleShape = new fabric.Rect({
      width: 60,
      height: 60,
      fill: templateId === 'tmpl-marble-1'
        ? 'linear-gradient(135deg,#fff,#e0e0e0)'
        : 'linear-gradient(135deg,#444,#222)',
      rx: templateId === 'tmpl-marble-1' ? 8 : 30, // borderRadius
      ry: templateId === 'tmpl-marble-1' ? 8 : 30, // borderRadius
      opacity: templateId === 'tmpl-marble-1' ? 0.7 : 0.5,
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(marbleShape);
    created.push(marbleShape);

    const textEl = new fabric.Textbox('GM', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: 24,
      fontWeight: '700',
      fill: templateId === 'tmpl-marble-1' ? '#78716c' : '#d4af37',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // New Floral Templates (tmpl-floral-3, tmpl-floral-4)
  else if (templateId === 'tmpl-floral-3' || templateId === 'tmpl-floral-4') {
    const corner1 = new fabric.Circle({
      radius: 25,
      fill: templateId === 'tmpl-floral-3' ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.5)',
      left: fabricCanvas.width * 0.2,
      top: fabricCanvas.height * 0.2,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(corner1);
    created.push(corner1);

    const textEl = new fabric.Textbox(templateId === 'tmpl-floral-3' ? 'Vintage Rose' : 'Blush Petal', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.7,
      fontSize: 16,
      fontFamily: 'Georgia, serif',
      fill: templateId === 'tmpl-floral-3' ? '#9d174d' : '#db2777',
      fontWeight: '600',
      textAlign: 'center',
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Quote Templates (tmpl-quote-1 to tmpl-quote-4)
  else if (templateId.startsWith('tmpl-quote-')) {
    const quoteTexts = {
      'tmpl-quote-1': { text: '"STAY\nWILD"', color: '#ffffff', size: 16 },
      'tmpl-quote-2': { text: '"DREAM\nBIG"', color: '#92400e', size: 16 },
      'tmpl-quote-3': { text: '"BELIEVE\nIN YOURSELF"', color: '#4338ca', size: 14 },
      'tmpl-quote-4': { text: '"MAKE IT\nHAPPEN"', color: '#f0fdf4', size: 16 }
    };
    const q = quoteTexts[templateId] || quoteTexts['tmpl-quote-1'];

    const textEl = new fabric.Textbox(q.text, {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: q.size,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '700',
      fill: q.color,
      textAlign: 'center',
      lineHeight: 1.5,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Aesthetic Templates (tmpl-aesthetic-3, tmpl-aesthetic-4)
  else if (templateId === 'tmpl-aesthetic-3' || templateId === 'tmpl-aesthetic-4') {
    const circle = new fabric.Circle({
      radius: 35,
      fill: 'rgba(255,255,255,0.7)',
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.4,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(circle);
    created.push(circle);

    const textEl = new fabric.Textbox(templateId === 'tmpl-aesthetic-3' ? 'Sunset' : 'Neutral', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.75,
      fontSize: 14,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '600',
      fill: '#ffffff',
      shadow: '0 1px 3px rgba(0,0,0,0.3)',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Cute Sticker Templates (tmpl-cute-3, tmpl-cute-4)
  else if (templateId === 'tmpl-cute-3' || templateId === 'tmpl-cute-4') {
    // Sticker-style small elements
    const stickerData = templateId === 'tmpl-cute-3'
      ? [
        { emoji: '🧸', left: 0.25, top: 0.25, size: 28 },
        { emoji: '❤️', left: 0.70, top: 0.30, size: 22 },
        { emoji: '⭐', left: 0.30, top: 0.70, size: 20 }
      ]
      : [
        { emoji: '🐻', left: 0.30, top: 0.30, size: 30 },
        { emoji: '☁️', left: 0.65, top: 0.25, size: 24 },
        { emoji: '✨', left: 0.50, top: 0.75, size: 22 }
      ];

    stickerData.forEach(s => {
      const sticker = new fabric.Textbox(s.emoji, {
        left: fabricCanvas.width * s.left,
        top: fabricCanvas.height * s.top,
        fontSize: s.size,
        originX: 'center',
        originY: 'center',
      });
      designLayer.add(sticker);
      created.push(sticker);
    });
  }

  // Minimal Templates (tmpl-minimal-3, tmpl-minimal-4)
  else if (templateId === 'tmpl-minimal-3' || templateId === 'tmpl-minimal-4') {
    const textEl = new fabric.Textbox(templateId === 'tmpl-minimal-3' ? 'AB' : 'XY', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: 40,
      fontFamily: 'Inter, sans-serif',
      fontWeight: templateId === 'tmpl-minimal-3' ? '200' : '400',
      fill: templateId === 'tmpl-minimal-3' ? '#27272a' : '#18181b',
      charSpacing: templateId === 'tmpl-minimal-3' ? 80 : 60, // Fabric uses charSpacing for letterSpacing
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Marble Templates (tmpl-marble-3, tmpl-marble-4)
  else if (templateId === 'tmpl-marble-3' || templateId === 'tmpl-marble-4') {
    const marbleShape = new fabric.Rect({
      width: 80,
      height: 80,
      fill: templateId === 'tmpl-marble-3'
        ? 'linear-gradient(135deg,#27272a,#18181b)'
        : 'linear-gradient(135deg,#fdf2f8,#fbcfe8)',
      rx: 12, // borderRadius
      ry: 12, // borderRadius
      opacity: 0.6,
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.45,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(marbleShape);
    created.push(marbleShape);

    const textEl = new fabric.Textbox('LN', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: 28,
      fontWeight: '700',
      fill: templateId === 'tmpl-marble-3' ? '#d4af37' : '#be185d',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Dark Premium Templates (tmpl-dark-1 to tmpl-dark-4)
  else if (templateId.startsWith('tmpl-dark-')) {
    const darkData = {
      'tmpl-dark-1': { text: 'MIDNIGHT', glow: '#8b5cf6', size: 24 },
      'tmpl-dark-2': { text: 'NOIR', glow: '#f97316', size: 26 },
      'tmpl-dark-3': { text: 'GOLD\nEDGE', glow: '#fbbf24', size: 20 },
      'tmpl-dark-4': { text: 'NEON\nNIGHTS', glow: '#22d3d3', size: 22 }
    };
    const d = darkData[templateId] || darkData['tmpl-dark-1'];

    // Glow accent
    const glow = new fabric.Circle({
      radius: 10,
      fill: d.glow,
      shadow: `0 0 15px ${d.glow}`,
      left: fabricCanvas.width * 0.3,
      top: fabricCanvas.height * 0.25,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(glow);
    created.push(glow);

    const textEl = new fabric.Textbox(d.text, {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      fontSize: d.size,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '800',
      fill: '#ffffff',
      textAlign: 'center',
      shadow: `0 0 10px ${d.glow}`,
      lineHeight: 1.4,
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Abstract Templates (tmpl-abstract-3, tmpl-abstract-4)
  else if (templateId === 'tmpl-abstract-3' || templateId === 'tmpl-abstract-4') {
    // Fabric.js doesn't have direct blob shapes, use a circle and skew/scale or custom path
    const blob = new fabric.Circle({
      radius: 40,
      fill: 'rgba(255,255,255,0.4)',
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.45,
      originX: 'center',
      originY: 'center',
      scaleX: templateId === 'tmpl-abstract-3' ? 1 : 0.8,
      scaleY: templateId === 'tmpl-abstract-3' ? 0.8 : 1.2,
      angle: templateId === 'tmpl-abstract-3' ? 0 : 45,
    });
    designLayer.add(blob);
    created.push(blob);

    const textEl = new fabric.Textbox(templateId === 'tmpl-abstract-3' ? 'Flow' : 'Splash', {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.75,
      fontSize: 14,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '600',
      fill: '#ffffff',
      shadow: '0 1px 3px rgba(0,0,0,0.3)',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Cultural Templates (tmpl-cultural-1 to tmpl-cultural-4)
  else if (templateId.startsWith('tmpl-cultural-')) {
    const cultData = {
      'tmpl-cultural-1': { text: 'AJRAAK', color: '#ffffff', accent: '#e879f9' },
      'tmpl-cultural-2': { text: 'MANDALA', color: '#ffffff', accent: '#fcd34d' },
      'tmpl-cultural-3': { text: 'PERSIAN', color: '#ffffff', accent: '#60a5fa' },
      'tmpl-cultural-4': { text: 'TRIBAL', color: '#ffffff', accent: '#fbbf24' }
    };
    const c = cultData[templateId] || cultData['tmpl-cultural-1'];

    // Decorative circles
    for (let i = 0; i < 3; i++) {
      const circle = new fabric.Circle({
        radius: (30 + i * 15) / 2, // radius is half of width/height
        stroke: c.accent,
        strokeWidth: 2,
        fill: 'transparent',
        opacity: 0.6,
        left: fabricCanvas.width / 2,
        top: fabricCanvas.height * 0.4,
        originX: 'center',
        originY: 'center',
      });
      designLayer.add(circle);
      created.push(circle);
    }

    const textEl = new fabric.Textbox(c.text, {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.75,
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      fontWeight: '700',
      fill: c.color,
      textAlign: 'center',
      originX: 'center',
      originY: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Pattern Templates (tmpl-pattern-1 to tmpl-pattern-4)
  else if (templateId.startsWith('tmpl-pattern-')) {
    const patData = {
      'tmpl-pattern-1': { text: 'Retro', color: '#94a3b8' },
      'tmpl-pattern-2': { text: 'Grid', color: '#475569' },
      'tmpl-pattern-3': { text: 'Geo', color: '#ffffff' },
      'tmpl-pattern-4': { text: 'Lines', color: '#64748b' }
    };
    const p = patData[templateId] || patData['tmpl-pattern-1'];

    // Small geometric elements
    for (let i = 0; i < 4; i++) {
      const shape = new fabric.Rect({
        width: 25,
        height: 25,
        fill: p.color,
        opacity: 0.3,
        left: fabricCanvas.width * (0.25 + i * 0.20),
        top: fabricCanvas.height * (0.35 + (i % 2) * 0.30),
        originX: 'center',
        originY: 'center',
      });
      designLayer.add(shape);
      created.push(shape);
    }

    const textEl = new fabric.Textbox(p.text, {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height * 0.75,
      fontSize: 18,
      fontFamily: 'Inter, sans-serif',
      fontWeight: '500',
      fill: '#ffffff',
      shadow: '0 1px 3px rgba(0,0,0,0.5)',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // Default fallback for unknown templates
  else {
    const pos = getCameraSafePosition(spec.orientation);
    const textEl = new fabric.Textbox(spec.title || 'Your Design', {
      left: pos.x,
      top: pos.y,
      fontSize: 32,
      fontFamily: 'Poppins',
      fill: '#0f172a',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
    });
    designLayer.add(textEl);
    created.push(textEl);
  }

  // 6) Finalize and render
  if (created.length) {
    fabricCanvas.setActiveObject(created[0]);
    // Ensure right panel (properties) is visible
    showPanel('properties');
  }

  fabricCanvas.renderAll();
  showToast('Template applied. Start editing.');
  saveState();
}

function getCameraSafePosition(orientation) {
  const sheet = document.getElementById('design-sheet');
  const w = sheet ? sheet.clientWidth : 350;
  const h = sheet ? sheet.clientHeight : 650;
  const cutEl = sheet ? sheet.querySelector('.camera-cutout') : null;
  const cut = { x: 24, y: 24, w: 110, h: 125 };
  if (cutEl) {
    const cx = parseFloat(cutEl.style.left) || 0;
    const cy = parseFloat(cutEl.style.top) || 0;
    cut.x = cx; cut.y = cy; cut.w = cutEl.offsetWidth || cut.w; cut.h = cutEl.offsetHeight || cut.h;
  }

  // default center
  let x = w / 2, y = h / 2;
  if (orientation === 'top') { x = w * 0.65; y = Math.max(cut.y + cut.h + 40, 140); }
  if (orientation === 'center') { x = w / 2; y = h / 2; }
  if (orientation === 'bottom') { x = w / 2; y = h * 0.78; }
  if (orientation === 'left') { x = Math.max(cut.x + cut.w + 40, 110); y = h / 2; }

  // Ensure not inside cutout
  if (x > cut.x && x < cut.x + cut.w && y > cut.y && y < cut.y + cut.h) {
    y = cut.y + cut.h + 60;
  }
  return { x, y };
}

function escapeHtml(s) { return String(s).replace(/[&<>\"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": "&#39;" }[c]; }); }

// ===== Toast helper for visual feedback =====
function showToast(message, duration = 1600) {
  let t = document.getElementById('studio-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'studio-toast';
    t.style.position = 'fixed';
    t.style.left = '50%';
    t.style.transform = 'translateX(-50%)';
    t.style.bottom = '28px';
    t.style.padding = '10px 16px';
    t.style.background = 'rgba(17,24,39,0.9)';
    t.style.color = '#fff';
    t.style.borderRadius = '8px';
    t.style.fontWeight = '600';
    t.style.zIndex = 9999;
    document.body.appendChild(t);
  }
  t.textContent = message;
  t.style.opacity = '1';
  t.style.transition = '';
  setTimeout(() => { t.style.transition = 'opacity 300ms'; t.style.opacity = '0'; }, duration);
}

// ===== MATERIAL & FINISH =====


// Ensure initial state saved
setTimeout(() => {
  saveState();
}, 500);

// ==========================================
// ACTIVATE AI ASSIST BUTTONS
// ==========================================

// ===== HEADER / SIDEBAR HELPER ACTIONS =====
function openRecent() {
  alert('Recent designs — feature coming soon');
}

function openMyWork() {
  alert('My Work — feature coming soon');
}

function openHelp() {
  alert('Help — visit documentation or contact support');
}

function toggleSubPanel() {
  const sp = document.getElementById('sub-panel');
  if (!sp) return;
  sp.classList.toggle('hidden');
}

async function saveDesign() {
  if (!fabricCanvas) return;
  const objects = fabricCanvas.getObjects();
  const hasContent = objects.some(obj => obj.name !== 'phone-body' && obj.name !== 'design-bg' && obj.name !== 'design-bg-img');

  if (!hasContent) {
    showToast("Please add something to the design before saving.", "fa-exclamation-circle");
    return;
  }

  saveState();

  try {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData || !userData._id) {
      showToast("Please login to save designs", "fa-exclamation-triangle");
      return;
    }

    fabricCanvas.discardActiveObject();
    fabricCanvas.renderAll();

    const canvasData = JSON.stringify(fabricCanvas.toJSON());
    const previewImage = fabricCanvas.toDataURL({ format: 'png', quality: 0.8 });
    const model = currentModelId || "Unknown Model";
    
    const titleEl = document.querySelector('.project-title');
    const designName = titleEl ? titleEl.innerText : "Untitled Design";

    const payload = {
      userId: userData._id,
      designName: designName,
      model: model,
      canvasData: canvasData,
      previewImage: previewImage,
      material: "Standard"
    };

    const urlParams = new URLSearchParams(window.location.search);
    const designId = urlParams.get('id');

    let endpoint = "http://localhost:5000/api/design/save";
    let method = "POST";

    if (designId) {
      endpoint = `http://localhost:5000/api/design/${designId}`;
      method = "PUT";
    }

    const btn = document.querySelector('.header-btn[onclick="saveDesign()"]');
    const originalText = btn ? btn.innerHTML : '<i class="fas fa-save"></i> Save';
    if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';

    const response = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (btn) btn.innerHTML = originalText;

    if (response.ok) {
      let msg = "Design Saved Successfully";
      if (typeof isPremium !== 'undefined' && isPremium) msg = "Premium " + msg;
      showToast(msg, "fa-check-circle");
      
      if (method === "POST") {
        const data = await response.json();
        if (data.design && data.design._id) {
          const newUrl = new URL(window.location.href);
          newUrl.searchParams.set('id', data.design._id);
          window.history.pushState({ path: newUrl.href }, '', newUrl.href);
        }
      }
    } else {
      showToast("Failed to save design", "fa-times-circle");
    }
  } catch (err) {
    console.error("Save Error:", err);
    showToast("Error saving design", "fa-times-circle");
    const btn = document.querySelector('.header-btn[onclick="saveDesign()"]');
    if (btn) btn.innerHTML = '<i class="fas fa-save"></i> Save';
  }
}

async function exportDesign() {
  if (!fabricCanvas) {
    showToast("Canvas not initialized", "fa-exclamation-triangle");
    return;
  }

  showToast("Preparing Download...", "fa-spinner fa-spin");

  // De-select any active object for clean export
  fabricCanvas.discardActiveObject();
  fabricCanvas.renderAll();

  try {
    const designSheet = document.getElementById('design-sheet');
    
    // If html2canvas is available, use it for a pixel-perfect DOM screenshot
    if (typeof html2canvas !== 'undefined') {
      const canvas = await html2canvas(designSheet, {
        scale: 3, // High quality
        useCORS: true,
        backgroundColor: null
      });
      
      const dataURL = canvas.toDataURL('image/png');
      triggerDownload(dataURL);
    } else {
      // Fallback to fabric canvas export
      const dataURL = fabricCanvas.toDataURL({
        format: 'png',
        quality: 1,
        multiplier: 3 // High resolution
      });
      triggerDownload(dataURL);
    }
    
    function triggerDownload(dataURL) {
      const link = document.createElement('a');
      const titleEl = document.querySelector('.project-title');
      const designName = titleEl ? titleEl.innerText.trim().replace(/[^a-z0-9]/gi, '_').toLowerCase() : "casecraft_design";
      
      link.download = designName + '.png';
      link.href = dataURL;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showToast("Design Downloaded Successfully!", "fa-check-circle");
    }
  } catch (error) {
    console.error("Export Error:", error);
    showToast("Failed to export design", "fa-exclamation-triangle");
  }
}

function placeOrder() {
  const btn = document.querySelector('.header-btn[onclick="placeOrder()"]');
  if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

  localStorage.setItem("orderSource", "design-studio");

  if (!fabricCanvas) {
    window.location.href = 'order.html';
    return;
  }

  // De-select active objects so handles don't show up in image
  fabricCanvas.discardActiveObject();
  fabricCanvas.renderAll();
  
  saveState(); // Guarantee the latest canvas json is flushed to localStorage before navigating

  // Save JSON (important for edit)
  const designJSON = fabricCanvas.toJSON();
  localStorage.setItem("designJSON", JSON.stringify(designJSON));

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  localStorage.removeItem(`savedDesign_${userId}`);



  // Try capturing high-quality PNG first
  try {
    const designImage = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1
    });
    localStorage.setItem("designImage", designImage);
    localStorage.setItem("designPreview", designImage);
  } catch (err) {
    console.warn("Storage error or Canvas too large for PNG. Falling back to compressed JPEG...", err);
    // Fallback: Use low-quality JPEG to significantly reduce string size to fit in localStorage quota limits
    try {
      const fallbackURL = fabricCanvas.toDataURL({
        format: 'jpeg',
        quality: 0.6
      });
      localStorage.setItem("designImage", fallbackURL);
      localStorage.setItem("designPreview", fallbackURL);
    } catch (fallbackErr) {
      console.error("Critical failure saving canvas:", fallbackErr);
    }
  }

  // Redirect to order page
  setTimeout(() => {
    window.location.href = 'order.html';
  }, 100);
}
// Store the current model image path for mask reference
// Positioning camera cutout is now handled by applyDynamicCutout(config)


// Positioning camera cutout is now handled by applyDynamicCutout(config)




function updateEditorState(hasModel) {
  const placeholder = document.getElementById("canvasPlaceholder");

  if (placeholder) {
    placeholder.style.display = hasModel ? "none" : "block";
  }
}

// ==========================================
// ===== ADDITIVE ENHANCEMENTS (SAFE) =====
// ==========================================

function autoFit() {
  zoomLevel = 0.5;
  applyZoom();
}

(function initSafeEnhancements() {
  const scrollContainer = document.querySelector('.scroll-container');
  const zoomWrapper = document.querySelector('.zoom-wrapper');
  const zoomIndicator = document.getElementById('zoom-level');
  const designSheet = document.getElementById('design-sheet');

  if (!scrollContainer || !zoomWrapper || !designSheet) return;

  // 1. Sync Zoom Display (Additive Observer)
  const syncObserver = new MutationObserver(() => {
    const displayZoom = Math.round(zoomLevel * 100);
    if (zoomIndicator) {
      zoomIndicator.innerText = displayZoom + '%';
    }

    // Pan hint
    if (zoomLevel > 1) {
      scrollContainer.classList.add('can-pan');
    } else {
      scrollContainer.classList.remove('can-pan');
      scrollContainer.classList.remove('is-panning');
    }
  });
  syncObserver.observe(zoomWrapper, { attributes: true, attributeFilter: ['style'] });

  // 2. Ctrl + Wheel Zoom
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      const nextZoom = Math.min(3, Math.max(0.2, zoomLevel + delta));
      if (nextZoom !== zoomLevel) {
        zoomLevel = nextZoom;
        applyZoom();
      }
    }
  }, { passive: false });

  // 3. Drag-to-Pan (High Zoom Only)
  let isPanningMode = false;
  let panStartX, panStartY, panScrollLeft, panScrollTop;

  scrollContainer.addEventListener('mousedown', (e) => {
    // Only pan if zoomed in and not clicking a design element
    if (zoomLevel > 1 && (e.target === scrollContainer || e.target === document.querySelector('.canvas-area'))) {
      isPanningMode = true;
      scrollContainer.classList.add('is-panning');
      panStartX = e.pageX - scrollContainer.offsetLeft;
      panStartY = e.pageY - scrollContainer.offsetTop;
      panScrollLeft = scrollContainer.scrollLeft;
      panScrollTop = scrollContainer.scrollTop;
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPanningMode) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const y = e.pageY - scrollContainer.offsetTop;
    const walkX = (x - panStartX) * 1.5;
    const walkY = (y - panStartY) * 1.5;
    scrollContainer.scrollLeft = panScrollLeft - walkX;
    scrollContainer.scrollTop = panScrollTop - walkY;
  });

  window.addEventListener('mouseup', () => {
    isPanningMode = false;
    scrollContainer.classList.remove('is-panning');
  });

  // 4. Model Ratio Improvement (Observer)
  const modelObserver = new MutationObserver((mutations) => {
    const modelImg = designSheet.querySelector('.model-front');
    const canvasArea = document.querySelector('.canvas-area');

    if (modelImg && canvasArea) {
      if (modelImg.complete) {
        applyModelRatio(modelImg, canvasArea);
      } else {
        modelImg.onload = () => applyModelRatio(modelImg, canvasArea);
      }
    }
  });

  function applyModelRatio(img, container) {
    if (img.naturalWidth && img.naturalHeight) {
      const ratio = img.naturalWidth / img.naturalHeight;
      // Let the design-sheet explicitly control layout. Optional aspect ratio on container for stability
      container.style.aspectRatio = ratio.toString();
    }
  }

  modelObserver.observe(designSheet, { childList: true });

  // Initial call for existing models if any
  const existingModel = designSheet.querySelector('.model-front');
  if (existingModel && existingModel.complete) {
    applyModelRatio(existingModel, document.querySelector('.canvas-area'));
  }
})();


// ==========================================
// ADDITIVE JS: PROFESSIONAL INTERACTION LAYER
// ==========================================
(function () {
  const subPanel = document.getElementById('sub-panel');
  const projectTitle = document.querySelector('.project-title');
  const hasModel = localStorage.getItem("selectedModel") || document.querySelector('.model-front');
  let currentActiveId = 'templates';

  // 1. Unified Smart Sidebar Toggle
  function togglePanel(targetId) {
    if (!subPanel) return;

    const isOpen = subPanel.classList.contains('active');
    if (targetId === currentActiveId && isOpen) {
      subPanel.classList.remove('active');
    } else {
      subPanel.classList.add('active');
    }
    currentActiveId = targetId;
  }

  // (Redundant click listener removed to prevent conflict with showPanel)
  /*
  document.querySelectorAll('.sidebar-container .menu-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const onclickAttr = btn.getAttribute('onclick') || "";
      const match = onclickAttr.match(/'([^']+)'/);
      if (match) togglePanel(match[1]);
    });
  });
  */

  // 2. Project Title: Double-Click Rename
  if (projectTitle) {
    projectTitle.addEventListener('dblclick', () => {
      projectTitle.contentEditable = "true";
      projectTitle.focus();
      document.execCommand('selectAll', false, null);
    });

    projectTitle.addEventListener('blur', () => {
      projectTitle.contentEditable = "false";
    });

    projectTitle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        projectTitle.blur();
      }
    });
  }

  // 3. Auto-Close Sub-panel on Selection (Contextual Reset)
  function closeSubPanel() {
    if (subPanel) subPanel.classList.remove('active');
  }

  // Monitor document for selection actions
  document.addEventListener('click', (e) => {
    // Template Cards
    if (e.target.closest('.template-card')) {
      closeSubPanel();
    }
    // Material Items
    if (e.target.closest('.grad-item')) {
      closeSubPanel();
    }
    // Finish Buttons
    if (e.target.closest('.style-btns button')) {
      closeSubPanel();
    }
    // Model Selection (redirects or dynamic change)
    if (e.target.closest('.select-model-btn') || e.target.closest('.model-card')) {
      closeSubPanel();
    }
  });

  // 4. MutationObserver for canvas-driven selection (Properties Panel)
  const panelObserver = new MutationObserver((mutations) => {
    mutations.forEach(m => {
      if (m.target.classList.contains('active') && m.target.id === 'panel-properties') {
        if (subPanel) subPanel.classList.add('active');
        currentActiveId = 'properties';
      }
    });
  });

  document.querySelectorAll('.panel-content').forEach(p => {
    panelObserver.observe(p, { attributes: true });
  });

  // 5. Initial State Sync: Hide sub-panel if model is already selected
  if (subPanel) {
    if (hasModel) {
      subPanel.classList.remove('active'); // Clean reset state
    } else if (document.querySelector('.menu-btn.active')) {
      subPanel.classList.add('active');
    }
  }
})();

// ==========================================
// ACTIVATE AI ASSIST BUTTONS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const aiPanel = document.getElementById('panel-ai');
  if (aiPanel) {
    const aiBtns = aiPanel.querySelectorAll('.add-text-btn');
    aiBtns.forEach(btn => {
      const text = btn.innerText.toLowerCase();
      if (text.includes('layout')) {
        btn.addEventListener('click', optimizeLayout);
      } else if (text.includes('colors')) {
        btn.addEventListener('click', suggestColors);
      }
    });
  }
});

function optimizeLayout() {
  if (!fabricCanvas) return;
  const objects = fabricCanvas.getObjects();
  if (objects.length === 0) {
    if (typeof showToast === 'function') showToast("No elements to arrange");
    return;
  }

  const startY = 120;
  const spacing = 100;

  objects.forEach((obj, i) => {
    obj.set({
      left: fabricCanvas.width / 2,
      top: startY + (i * spacing),
      originX: 'center',
      originY: 'center'
    });
  });

  fabricCanvas.renderAll();
  if (typeof showToast === 'function') showToast("Layout optimized");
  saveState();
}

function suggestColors() {
  const palettes = [
    ['#FF6B6B', '#4ECDC4', '#FFE66D'],
    ['#6c5ce7', '#a29bfe', '#fab1a0'],
    ['#00b894', '#55efc4', '#81ecec'],
    ['#fdcb6e', '#ffeaa7', '#e17055']
  ];
  const choice = palettes[Math.floor(Math.random() * palettes.length)];

  const bgLayer = document.querySelector('.background-layer');
  if (bgLayer) {
    bgLayer.style.background = choice[0];
    if (typeof showToast === 'function') showToast("Color theme applied");
    if (typeof saveState === 'function') saveState();
    if (typeof updatePreview === 'function') updatePreview();
  }
}

async function simulateAIImage() {
  if (typeof showToast === 'function') showToast("AI is generating...");
  // Simulate delay
  await new Promise(r => setTimeout(r, 1500));

  const src = `https://picsum.photos/seed/${Math.random()}/300/300`;

  if (fabricCanvas) {
    fabric.Image.fromURL(src, function (img) {
      const scale = Math.max(
        fabricCanvas.width / img.width,
        fabricCanvas.height / img.height
      );
      img.scale(scale);
      img.set({
        left: fabricCanvas.width / 2,
        top: fabricCanvas.height / 2,
        originX: 'center',
        originY: 'center'
      });
      fabricCanvas.add(img);
      fabricCanvas.setActiveObject(img);
      fabricCanvas.renderAll();
      saveState();
      if (typeof showToast === 'function') showToast("AI Image generated");
    });
  }
}

// ==========================================
// NON-DESTRUCTIVE ENHANCEMENT MODE
// ==========================================

/* Selection UI & Canva-style Handles Logic */
let activePaletteType = 'text';

function syncSelectionUI(el) {
  const ui = document.getElementById('selection-ui');
  if (!ui || !el) return;

  // Use absolute positioning values directly for accuracy
  ui.style.display = 'block';
  ui.style.left = el.style.left;
  ui.style.top = el.style.top;
  ui.style.width = el.offsetWidth + 'px';
  ui.style.height = el.offsetHeight + 'px';

  // Inherit the exact transform (translate, rotate, etc.) to match the element
  ui.style.transform = el.style.transform || 'none';

  // Hide default toolbar if text
  if (el.classList.contains('text-element')) {
    document.getElementById('text-toolbar')?.classList.add('hidden');
  }
}

function hideSelectionUI() {
  const ui = document.getElementById('selection-ui');
  if (ui) ui.style.display = 'none';
  document.getElementById('text-toolbar')?.classList.remove('hidden');
}

/* Advanced Color Palette Flyout Logic */
const studioPaletteColors = [
  '#000000', '#2d3436', '#636e72', '#b2bec3', '#dfe6e9', '#ffffff',
  '#d63031', '#ff7675', '#e84393', '#fd79a8', '#6c5ce7', '#a29bfe',
  '#0984e3', '#74b9ff', '#00b894', '#55efc4', '#fbc531', '#ffeaa7'
];

function toggleColorPalette(trigger, type) {
  activePaletteType = type;
  const flyout = document.querySelector('.color-palette-flyout') || createColorPaletteFlyout();

  if (flyout.style.display === 'block') {
    flyout.style.display = 'none';
    return;
  }

  // Position flyout near the trigger button
  const rect = trigger.getBoundingClientRect();
  flyout.style.display = 'block';
  flyout.style.left = (rect.right + 15) + 'px';
  flyout.style.top = Math.min(rect.top, window.innerHeight - flyout.offsetHeight - 20) + 'px';

  // Highlight current color
  renderPaletteColors(flyout);
}

function createColorPaletteFlyout() {
  const flyout = document.createElement('div');
  flyout.className = 'color-palette-flyout';
  flyout.innerHTML = `
        <div class="palette-section">
            <div class="palette-heading"><i class="fas fa-palette"></i> Document colors</div>
            <div class="palette-subinfo">Colors currently in your design</div>
            <div class="color-circles-grid" id="doc-colors-grid">
                <div class="add-color-btn" title="Add custom color" onclick="document.getElementById('hidden-picker').click()">
                    <i class="fas fa-plus"></i>
                </div>
                <input type="color" id="hidden-picker" style="display:none" onchange="applyColorFromPalette(this.value)">
            </div>
        </div>
        <div class="palette-section">
            <div class="palette-heading"><i class="fas fa-th"></i> Default solid colors</div>
            <div class="color-circles-grid" id="default-colors-grid"></div>
        </div>
    `;
  document.body.appendChild(flyout);

  // Close on click outside
  document.addEventListener('mousedown', (e) => {
    if (!flyout.contains(e.target) && !e.target.closest('.studio-palette-btn')) {
      flyout.style.display = 'none';
    }
  });

  return flyout;
}

function renderPaletteColors(flyout) {
  const defaultGrid = flyout.querySelector('#default-colors-grid');
  defaultGrid.innerHTML = '';

  studioPaletteColors.forEach(color => {
    const div = document.createElement('div');
    div.className = `color-circle ${color === '#ffffff' ? 'white' : ''}`;
    div.style.backgroundColor = color;
    div.onclick = () => applyColorFromPalette(color);
    defaultGrid.appendChild(div);
  });
}

function applyColorFromPalette(color) {
  if (activePaletteType === 'text') {
    updateSelectedColor(color);
  } else if (activePaletteType === 'background') {
    applyDesignBackground(color);
    saveState();
  }
}

/* Upload Panel Search & Recent Logic */
let recentUploads = [];

function filterUploads(query) {
  const items = document.querySelectorAll('#upload-preview-grid .upload-item, #upload-preview-grid img');
  const q = query.toLowerCase();

  items.forEach(item => {
    const alt = item.alt || '';
    item.style.display = alt.toLowerCase().includes(q) ? 'block' : 'none';
  });
}

function filterTemplates(query) {
  const cards = document.querySelectorAll('#panel-templates .template-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.dataset.title || '';
    const category = card.dataset.category || '';
    const match = title.toLowerCase().includes(q) || category.toLowerCase().includes(q);
    card.style.display = match ? 'flex' : 'none';
  });
  // Hide empty categories
  document.querySelectorAll('#panel-templates .template-category').forEach(cat => {
    const hasVisible = Array.from(cat.querySelectorAll('.template-card')).some(c => c.style.display !== 'none');
    cat.style.display = hasVisible ? 'block' : 'none';
  });
}

function filterTextTools(query) {
  const q = query.toLowerCase();
  // Filter Stylish items and preset buttons
  const items = document.querySelectorAll('#panel-text .stylish-item, #panel-text .add-text-btn');
  items.forEach(item => {
    const text = item.innerText || '';
    item.style.display = text.toLowerCase().includes(q) ? 'block' : 'none';
  });
}

function filterBackgrounds(query) {
  const q = query.toLowerCase();
  // Filter colors (by hex if possible, though usually and difficult) and labels
  const items = document.querySelectorAll('#panel-background .color, #panel-background .gradient');
  items.forEach(item => {
    const color = item.dataset.color || '';
    const gradient = item.dataset.gradient || '';
    // Since backgrounds don't have text, we match by data attributes or just generic labels
    // In a real app we'd have search tags. For now, let's just make it do nothing if no text.
    // However, to satisfy the user, let's add titles to backgrounds or just support 'red', 'blue' etc.
    item.style.display = (color + gradient).toLowerCase().includes(q) ? 'block' : 'none';
  });
}

function filterElements(query) {
  const q = query.toLowerCase();
  const stickerBtns = document.querySelectorAll('#dynamic-sticker-grid .sticker-btn');

  stickerBtns.forEach(btn => {
    const text = btn.innerText.toLowerCase();
    // Also check for 'name' if we stored it, but for now just innerText
    if (text.includes(q) || q === '') {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });
}

function filterAITools(query) {
  const q = query.toLowerCase();
  const buttons = document.querySelectorAll('#panel-ai .add-text-btn');
  buttons.forEach(btn => {
    const text = btn.innerText || '';
    btn.style.display = text.toLowerCase().includes(q) ? 'block' : 'none';
  });
}


function clearRecentUploads() {
  const grid = document.getElementById('upload-preview-grid');
  if (grid) grid.innerHTML = '';
  recentUploads = [];
}

/* Toolbar Action Functions */
function enableTextEditingFromToolbar() {
  const el = document.querySelector('.selected-element.text-element');
  if (el) enableTextEditing(el);
}

function duplicateSelected() {
  const el = document.querySelector('.selected-element');
  if (!el) return;

  const clone = el.cloneNode(true);
  clone.classList.remove('selected-element');
  clone.style.left = (parseInt(el.style.left) + 20) + 'px';
  clone.style.top = (parseInt(el.style.top) + 20) + 'px';
  clone.style.zIndex = zIndexCounter++;

  // Re-attach selection listener
  clone.onclick = (e) => {
    e.stopPropagation();
    selectElement(clone);
  };

  el.parentNode.appendChild(clone);
  makeDraggable(clone);
  saveState();
  selectElement(clone);
}

// Initialize Selection UI Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const ui = document.getElementById('selection-ui');
  if (!ui) return;

  // Handle Resizing
  ui.querySelectorAll('.handle').forEach(handle => {
    handle.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const el = document.querySelector('.selected-element');
      if (!el) return;

      const type = handle.dataset.handle;
      const startX = e.clientX;
      const startY = e.clientY;
      const startW = el.offsetWidth;
      const startH = el.offsetHeight;
      const style = window.getComputedStyle(el);
      const startFontSize = parseFloat(style.fontSize);

      const onMouseMove = (moveEvent) => {
        const deltaX = moveEvent.clientX - startX;
        const deltaY = moveEvent.clientY - startY;

        let scale = 1;
        if (type === 'br' || type === 'rb') {
          scale = (startW + deltaX) / startW;
        } else if (type === 'tl') {
          scale = (startW - deltaX) / startW;
        }

        if (el.classList.contains('text-element')) {
          el.style.fontSize = (startFontSize * scale) + 'px';
        } else {
          el.style.width = (startW * scale) + 'px';
          el.style.height = (startH * scale) + 'px';
        }
        syncSelectionUI(el);
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        saveState();
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  });
});

function rotateSelected(deg) {
  const el = document.querySelector('.selected-element');
  if (!el) return;

  let currentRot = 0;
  const transform = el.style.transform || '';

  if (transform.includes('rotate')) {
    const match = transform.match(/rotate\(([^deg)]+)deg\)/);
    if (match) currentRot = parseFloat(match[1]);
  }

  const newRot = (currentRot + deg) % 360;

  // Preserve existing translate or other transforms
  if (transform.includes('translate')) {
    if (transform.includes('rotate')) {
      el.style.transform = transform.replace(/rotate\([^)]+\)/, `rotate(${newRot}deg)`);
    } else {
      el.style.transform = transform + ` rotate(${newRot}deg)`;
    }
  } else {
    el.style.transform = `translate(-50%, -50%) rotate(${newRot}deg)`;
  }

  syncSelectionUI(el);
  saveState();
}

function makeDraggable(el) {
  el.addEventListener('mousedown', () => {
    const syncInterval = setInterval(() => {
      if (el.classList.contains('selected-element')) {
        syncSelectionUI(el);
      }
    }, 10);

    const stopSync = () => {
      clearInterval(syncInterval);
      document.removeEventListener('mouseup', stopSync);
    };

    document.addEventListener('mouseup', stopSync);
  });
}

// ==========================================
// NEW MODEL SELECTION FLOW (SIDEBAR)
// ==========================================
function openBrandModal() {
  document.getElementById("brandModal").classList.add("active");
}

function closeBrandModal() {
  document.getElementById("brandModal").classList.remove("active");
}

let currentBrand = null;

function selectBrand(brandKey) {
  currentBrand = brandKey;
  localStorage.setItem("selectedBrand", brandKey);
  console.log("Brand selected:", brandKey);
  closeBrandModal();
  openModelListForBrand(brandKey);
}

function goBackToBrands() {
  const modelModal = document.getElementById("modelModalDynamic");
  if (modelModal) {
    modelModal.remove();
  }
  // reopen brand modal cleanly
  document.getElementById("brandModal").classList.add("active");
}

function openModelListForBrand(brandKey) {

  const brandData = brandModels[brandKey];

  if (!brandData) return;

  let modelHtml = `
    <div id="modelModalDynamic" class="model-modal active">
      <div class="modal-content">
        <div class="modal-header">
          <button class="back-btn" onclick="goBackToBrands()">
            <i class="fas fa-arrow-left"></i>
          </button>
          <h3>Select ${brandKey.charAt(0).toUpperCase() + brandKey.slice(1)} Model</h3>
          <button class="close-modal" onclick="document.getElementById('modelModalDynamic').remove()">&times;</button>
        </div>
        <div class="model-series-container">`;

  // If brand has series (object)
  if (typeof brandData === "object" && !Array.isArray(brandData)) {

    Object.keys(brandData).forEach(series => {

      modelHtml += `<h4 class="series-title">${series}</h4>`;
      modelHtml += `<div class="model-grid">`;

      brandData[series].forEach(model => {
        modelHtml += `
          <div class="model-item"
            onclick="handleModelSelect('${model}')">
            ${model}
          </div>`;
      });

      modelHtml += `</div>`;
    });

  }
  // If brand is simple array (no series)
  else if (Array.isArray(brandData)) {

    modelHtml += `<div class="model-grid">`;

    brandData.forEach(model => {
      modelHtml += `
        <div class="model-item"
          onclick="handleModelSelect('${model}')">
          ${model}
        </div>`;
    });

    modelHtml += `</div>`;
  }

  modelHtml += `
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", modelHtml);
}

function handleModelSelect(modelName) {
  selectModelByName(modelName);

  document.getElementById("modelModalDynamic")?.remove();

  if (typeof showToast === 'function') {
    showToast(modelName + " selected");
  }
}

// ==========================================
// EXPOSE TO GLOBAL SCOPE (For dynamic HTML onclick)
// ==========================================
window.openBrandModal = openBrandModal;
window.closeBrandModal = closeBrandModal;
window.selectBrand = selectBrand;
window.goBackToBrands = goBackToBrands;
window.handleModelSelect = handleModelSelect;
window.selectModelByName = selectModelByName;

// ===== INITIALIZATION & STARTUP =====
document.addEventListener('DOMContentLoaded', () => {
  // Core Visual Elements
  backgroundLayer = document.querySelector('.background-layer');
  const designSheetEl = document.getElementById('design-sheet');

  // Initialize Fabric Canvas if it exists
  const canvasEl = document.getElementById('fabric-canvas');
  if (canvasEl) {
    fabricCanvas = new fabric.Canvas('fabric-canvas', {
      allowTouchScrolling: true,
      preserveObjectStacking: true,
      backgroundColor: 'transparent'
    });

    // designLayer is now just a reference to fabricCanvas for direct-add mode
    // We don't use a Group anymore because Group's evented:false blocks selection
    designLayer = fabricCanvas;

    // Drag Outside Restriction
    fabricCanvas.on('object:moving', function (e) {
      const obj = e.target;
      if (obj.name === 'phone-body') return;

      // Restrict movement within canvas bounds
      const canvasWidth = fabricCanvas.width;
      const canvasHeight = fabricCanvas.height;

      if (obj.left < 0) obj.left = 0;
      if (obj.top < 0) obj.top = 0;
      if (obj.left + obj.width * obj.scaleX > canvasWidth) obj.left = canvasWidth - obj.width * obj.scaleX;
      if (obj.top + obj.height * obj.scaleY > canvasHeight) obj.top = canvasHeight - obj.height * obj.scaleY;

      syncSelectionUI();
    });

    // Add selection listeners to update property panels
    fabricCanvas.on('selection:created', (e) => updatePropertyPanels(e.selected[0]));
    fabricCanvas.on('selection:updated', (e) => updatePropertyPanels(e.selected[0]));
    fabricCanvas.on('selection:cleared', () => updatePropertyPanels(null));

    // Active Object Toolbar Functions
    window.toggleObjectLock = function () {
      if (!fabricCanvas) return;
      const obj = fabricCanvas.getActiveObject();
      if (!obj) return;

      const isLocked = obj.lockMovementX;
      obj.set({
        lockMovementX: !isLocked,
        lockMovementY: !isLocked,
        lockRotation: !isLocked,
        lockScalingX: !isLocked,
        lockScalingY: !isLocked,
        hasControls: isLocked, // hide controls when locked
        selectable: true,      // keep selectable to allow unlocking
        evented: true
      });

      const btnIcon = document.querySelector('#st-lock i');
      if (btnIcon) btnIcon.className = isLocked ? 'fas fa-unlock' : 'fas fa-lock';

      fabricCanvas.requestRenderAll();
      saveState();
    };

    window.rotateObjectSelection = function () {
      if (!fabricCanvas) return;
      const obj = fabricCanvas.getActiveObject();
      if (!obj || obj.lockRotation) return;

      obj.rotate((obj.angle || 0) + 90);
      fabricCanvas.requestRenderAll();
      saveState();
    };

    window.cropObjectSelection = function () {
      if (!fabricCanvas) return;
      const obj = fabricCanvas.getActiveObject();
      if (!obj) return;
      
      if (obj.type !== 'image') {
        if (typeof showToast === 'function') showToast("Crop only works on images.", "fa-info-circle");
        return;
      }
      
      // Toggle between Circle Crop and None
      if (!obj.clipPath) {
        const radius = Math.min(obj.width, obj.height) / 2;
        const circle = new fabric.Circle({
          radius: radius,
          originX: 'center',
          originY: 'center',
        });
        obj.set({ clipPath: circle });
        if (typeof showToast === 'function') showToast("Circle crop applied", "fa-crop");
      } else {
        obj.set({ clipPath: null });
        if (typeof showToast === 'function') showToast("Crop removed", "fa-undo");
      }
      
      fabricCanvas.requestRenderAll();
      saveState();
    };

    window.adjustObjectSelection = function () {
      if (!fabricCanvas) return;
      const obj = fabricCanvas.getActiveObject();
      if (!obj) return;
      
      if (obj.type !== 'image') {
        if (typeof showToast === 'function') showToast("Adjustments only work on images.", "fa-info-circle");
        return;
      }
      
      // Cycle through filters: Grayscale -> Sepia -> Invert -> None
      if (!obj.filters) obj.filters = [];
      const currentFilterType = obj.filters.length > 0 ? obj.filters[0].type : 'none';
      
      obj.filters = []; // clear first
      
      if (currentFilterType === 'none') {
        obj.filters.push(new fabric.Image.filters.Grayscale());
        if (typeof showToast === 'function') showToast("Grayscale applied", "fa-sliders-h");
      } else if (currentFilterType === 'Grayscale') {
        obj.filters.push(new fabric.Image.filters.Sepia());
        if (typeof showToast === 'function') showToast("Sepia applied", "fa-sliders-h");
      } else if (currentFilterType === 'Sepia') {
        obj.filters.push(new fabric.Image.filters.Invert());
        if (typeof showToast === 'function') showToast("Invert applied", "fa-sliders-h");
      } else {
        if (typeof showToast === 'function') showToast("Filters removed", "fa-undo");
      }
      
      obj.applyFilters();
      fabricCanvas.requestRenderAll();
      saveState();
    };

    window.deleteObjectSelection = function () {
      if (!fabricCanvas) return;
      const obj = fabricCanvas.getActiveObject();
      if (!obj || obj.name === 'phone-body') return;

      fabricCanvas.remove(obj);
      fabricCanvas.discardActiveObject();
      fabricCanvas.requestRenderAll();
      saveState();
    };

    // Function to update properties panel based on selected object
    function updatePropertyPanels(obj) {
      const propEmpty = document.getElementById('prop-empty');
      const propText = document.getElementById('prop-text');
      const propImage = document.getElementById('prop-image');
      const propActions = document.getElementById('prop-actions');
      const selectionToolbar = document.getElementById('selection-toolbar');

      if (!obj || obj.name === 'phone-body') {
        if (propEmpty) propEmpty.classList.remove('hidden');
        if (propText) propText.classList.add('hidden');
        if (propImage) propImage.classList.add('hidden');
        if (propActions) propActions.classList.add('hidden');
        if (selectionToolbar) selectionToolbar.style.display = 'none';
        return;
      }

      if (propEmpty) propEmpty.classList.add('hidden');
      if (propActions) propActions.classList.remove('hidden');

      if (selectionToolbar) {
        selectionToolbar.style.display = 'flex';
        const btnIcon = document.querySelector('#st-lock i');
        if (btnIcon) btnIcon.className = obj.lockMovementX ? 'fas fa-lock' : 'fas fa-unlock';
      }

      if (obj.type === 'textbox' || obj.type === 'i-text') {
        if (propText) propText.classList.remove('hidden');
        if (propImage) propImage.classList.add('hidden');

        // Sync values
        const textInput = document.getElementById('prop-text-input');
        const sizeInput = document.getElementById('prop-size');
        const fontSelect = document.getElementById('prop-font');

        if (textInput) textInput.value = obj.text || '';
        if (sizeInput) sizeInput.value = Math.round(obj.fontSize * obj.scaleY) || 16;
        if (fontSelect) fontSelect.value = obj.fontFamily || 'Inter';
      } else if (obj.type === 'image' || obj.name === 'sticker' || obj.name === 'shape') {
        if (propImage) propImage.classList.remove('hidden');
        if (propText) propText.classList.add('hidden');
      }
    }

    // Ensure initial zoom is applied
    applyZoom();

    // Startup Behavior: Always show "Select Model" on load as per user request
    const sidebarSelectedText = document.getElementById("sidebarSelectedModel");
    if (sidebarSelectedText) {
      sidebarSelectedText.innerText = "Select Model";
    }

    // Ensure wrapper is in "not selected" state on fresh load
    const editorWrapper = document.querySelector('.editor-wrapper');
    if (editorWrapper) {
      editorWrapper.classList.remove('model-selected');
    }

    // Ensure placeholder is visible (CSS already handles this if .model-front is absent)
    const placeholder = document.getElementById('canvasPlaceholder');
    if (placeholder) {
      placeholder.classList.remove('hidden');
      placeholder.style.display = 'flex';
    }
  }

  // Final layout sync
  setTimeout(() => {
    applyZoom();

    // RESTORE SAVED DESIGN & MODEL (if returning from Order page etc.)
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?._id;

    const urlParams = new URLSearchParams(window.location.search);
    const designId = urlParams.get('id');

    if (!designId) {
      if (fabricCanvas) fabricCanvas.clear();
      localStorage.removeItem(`savedDesign_${userId}`);
    }

    const savedDesignStr = localStorage.getItem(`savedDesign_${userId}`);
    const selectedModel = localStorage.getItem('selectedModel');
    
    if (savedDesignStr && selectedModel) {
      try {
        const state = JSON.parse(savedDesignStr);
        
        if (state && fabricCanvas) {
          fabricCanvas.loadFromJSON(state.fabric, () => {
            // Re-apply the phone mask and body correctly on top of the loaded objects
            selectModelByName(selectedModel);
            
            if (backgroundLayer && state.bg) {
              backgroundLayer.style.background = state.bg;
            }
            fabricCanvas.requestRenderAll();
            
            setTimeout(() => { updatePreview(); }, 200);   
          });
        }
      } catch (err) {
        console.error("Failed to restore design:", err);
      }
    }

  }, 500);
});

// 🎯 AI GENERATION LOGIC
document.addEventListener('DOMContentLoaded', () => {
  const aiInput = document.getElementById("aiImageInput");
  if (aiInput) {
    aiInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file || !fabricCanvas) return;

      const reader = new FileReader();
      reader.onload = function (event) {
        fabric.Image.fromURL(event.target.result, (img) => {
          const scale = Math.max(
            fabricCanvas.width / img.width,
            fabricCanvas.height / img.height
          );
          img.set({
            width: img.width,
            height: img.height,
            scaleX: scale,
            scaleY: scale,
            originX: 'center',
            originY: 'center',
            left: fabricCanvas.width / 2,
            top: fabricCanvas.height / 2,
            selectable: true,
            evented: true,
            lockMovementX: true,
            lockMovementY: true,
            lockRotation: true,
            lockScalingX: true,
            lockScalingY: true,
            hasControls: false,
            name: 'design-bg-img'
          });

          const existingBg = fabricCanvas.getObjects().find(obj => obj.name === 'design-bg' || obj.name === 'design-bg-img');
          if (existingBg) fabricCanvas.remove(existingBg);

          fabricCanvas.add(img);
          fabricCanvas.sendToBack(img);
          const phoneBody = fabricCanvas.getObjects().find(o => o.name === 'phone-body');
          if (phoneBody) fabricCanvas.sendToBack(phoneBody);
          fabricCanvas.renderAll();

          if (typeof saveState === 'function') saveState();
          if (typeof updatePreview === 'function') updatePreview();

          // 🖼️ STEP 1: SHOW THUMBNAIL AND FILENAME
          const thumbContainer = document.getElementById("aiThumbnailContainer");
          const thumbImg = document.getElementById("aiThumbnailPreview");
          const fileName = document.getElementById("aiFileName");
          const placeholderText = document.getElementById("aiPlaceholderText");

          if (thumbContainer && thumbImg && fileName) {
            thumbImg.src = event.target.result;
            fileName.innerText = file.name;
            thumbContainer.style.display = "flex";
            if (placeholderText) placeholderText.style.display = "none";
          }

          // Enable generate button now that image is uploaded
          const generateBtn = document.getElementById("aiGenerateBtn");
          if (generateBtn) {
            generateBtn.disabled = false;
            generateBtn.style.background = "linear-gradient(45deg, #6366f1, #8b5cf6)";
            generateBtn.style.cursor = "pointer";
            generateBtn.innerHTML = '✨ Generate AI Style';
          }

          // Clear any previous results
          const actionsBlock = document.getElementById("aiResultActions");
          const toggleBlock = document.getElementById("previewAiToggle");
          if (actionsBlock) actionsBlock.style.display = "none";
          if (toggleBlock) toggleBlock.style.display = "none";

          // Store original for toggle
          originalAIImageSrc = event.target.result;
        });
      };
      reader.readAsDataURL(file);
    });
  }
});

let currentAIStyle = 'anime'; // 👉 GLOBAL STATE

function selectAIStyle(btn) {
  // Update current style for prompt construction
  currentAIStyle = btn.dataset.style;

  // Reset all style buttons (Remove active state)
  document.querySelectorAll(".style-btn").forEach(b => {
    b.classList.remove("active", "selected-style");
  });

  // Set clicked button as active
  btn.classList.add("active", "selected-style");

  console.log("AI Style selected:", currentAIStyle);
}

async function generateAI() {
  const prompt = document.getElementById("aiPrompt").value;
  const generateBtn = document.getElementById("generateBtn");
  const errorMsg = document.getElementById("aiError");
  if (generateBtn) {
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
  }
  if (errorMsg) errorMsg.style.display = 'none';

  try {
    console.log("Sending to backend...");

    // If the page is served from a different port (live server), call the local backend directly.
    const apiUrl = (location.hostname === '127.0.0.1' && location.port && location.port !== '5000')
      ? 'http://127.0.0.1:5000/generate-ai'
      : '/generate-ai';

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Backend error");
    }

    const blob = await response.blob();
    const imageURL = URL.createObjectURL(blob);

    console.log("Image received");

    // 👇 canvas me add karo
    addImageToCanvasFromSrc(imageURL);
  } catch (err) {
    console.error("ERROR:", err);
    if (errorMsg) {
      errorMsg.style.display = 'block';
      errorMsg.innerHTML = '<i class="fas fa-exclamation-circle"></i> Generation failed. Check console.';
    } else {
      alert("Generation failed");
    }
  } finally {
    if (generateBtn) {
      generateBtn.disabled = false;
      generateBtn.innerHTML = '✨ Generate Design';
    }
  }
}

/**
 * AI Result Toggles and Apply Logic
 */
function uiToggleOriginal() {
  if (!originalAIImageSrc) return;

  const btnOriginal = document.getElementById("btnOriginal");
  const btnAiResult = document.getElementById("btnAiResult");

  if (btnOriginal) {
    btnOriginal.style.background = "#fff";
    btnOriginal.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
    btnOriginal.style.color = "#0f172a";
  }
  if (btnAiResult) {
    btnAiResult.style.background = "transparent";
    btnAiResult.style.boxShadow = "none";
    btnAiResult.style.color = "#475569";
  }

  addImageToCanvas(originalAIImageSrc);
  if (typeof showToast === 'function') showToast("Showing Original Image");
}

function uiToggleAiResult() {
  if (!generatedAIImageSrc) return;

  const btnOriginal = document.getElementById("btnOriginal");
  const btnAiResult = document.getElementById("btnAiResult");

  if (btnAiResult) {
    btnAiResult.style.background = "#fff";
    btnAiResult.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
    btnAiResult.style.color = "#0f172a";
  }
  if (btnOriginal) {
    btnOriginal.style.background = "transparent";
    btnOriginal.style.boxShadow = "none";
    btnOriginal.style.color = "#475569";
  }

  addImageToCanvas(generatedAIImageSrc);
  if (typeof showToast === 'function') showToast("Showing AI Generated Result");
}

function applyAIDesign() {
  const actionsBlock = document.getElementById("aiResultActions");
  const toggleBlock = document.getElementById("previewAiToggle");

  if (actionsBlock) actionsBlock.style.display = "none";
  if (toggleBlock) toggleBlock.style.display = "none";

  if (typeof showToast === 'function') showToast("AI Design Finalized! ✨");
  if (typeof saveState === 'function') saveState();
}

/**
 * Adds the generated AI image to the Fabric.js canvas.
 * @param {string} url The URL of the generated image.
 */
function addImageToCanvas(url) {
  if (!fabricCanvas) return;
  fabric.Image.fromURL(url, function (img) {
    img.scaleToWidth(250);
    fabricCanvas.centerObject(img);
    fabricCanvas.add(img);
    fabricCanvas.renderAll();

    if (typeof saveState === 'function') {
      saveState();
    }
  }, { crossOrigin: 'anonymous' });
}

/**
 * Premium Toast Notification System
 * @param {string} msg Message to display
 * @param {string} icon FontAwesome icon class (optional)
 */
function showToast(msg, icon = "fa-info-circle") {
  // Remove existing toasts
  const existing = document.querySelector('.toast-container');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-container';
  toast.innerHTML = `
        <i class="fas ${icon} toast-icon"></i>
        <span>${msg}</span>
    `;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto-hide
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

/**
 * One-time hint for discovering properties panel
 */
let tipShown = false;
function showDiscoveryTip() {
  if (tipShown) return;
  showToast("Click any element to edit colors/fonts!", "fa-lightbulb");
  tipShown = true;
}

// Add event listener to canvas for discovery tip
if (typeof fabricCanvas !== 'undefined' && fabricCanvas) {
  fabricCanvas.on('selection:created', showDiscoveryTip);
} else {
  // If not initialized yet, wait for initialization (mocking via late attachment)
  document.addEventListener('click', (e) => {
    if (e.target.closest('#fabric-canvas') && !tipShown) {
      // We'll let the selection:created event handle it once fabric is up
    }
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const designId = urlParams.get('id');

  if (designId) {
    try {
      const response = await fetch(`http://localhost:5000/api/design/${designId}`);
      if (response.ok) {
        const designData = await response.json();
        
        // Update Title
        const titleEl = document.querySelector('.project-title');
        if (titleEl && designData.designName) {
          titleEl.innerText = designData.designName;
        }

        // Apply Model
        if (designData.model) {
           selectModelByName(designData.model);
        }

        setTimeout(() => {
          if (fabricCanvas && designData.canvasData) {
            try {
              const canvasJSON = JSON.parse(designData.canvasData);
              fabricCanvas.loadFromJSON(canvasJSON, () => {
                fabricCanvas.renderAll();
              });
            } catch (e) {
              console.error("Error parsing design canvas data", e);
            }
          }
        }, 150);
      }
    } catch (err) {
      console.error("Error loading design:", err);
    }
  } else {
    // If no ID in URL, just load from localStorage normally
    const savedDesign = localStorage.getItem("designJSON");
    if (savedDesign) {
      // A slight delay to ensure canvas is fully initialized
      setTimeout(() => {
        if (fabricCanvas) {
          try {
            fabricCanvas.loadFromJSON(JSON.parse(savedDesign), () => {
              fabricCanvas.renderAll();
            });
          } catch (e) {
            console.error("Error loading design from localStorage", e);
          }
        }
      }, 100);
    }
  }

  // Initialize Sticker Library
  if (typeof renderStickers === 'function') {
    renderStickers('flowers');
  }

});
