const checkin=document.getElementById("checkIn");
const checkout=document.getElementById("checkOut");
const searchBTN=document.getElementById("searchBTN");
const noOfRes=document.getElementById("noOfRes");
const cardHandler=document.getElementById("cardHandler");
const getLoc=document.getElementById("getLoc");
const myHero=document.getElementById("myHero");


let obj={
    "error": false,
    "headers": {
        "response_time": 1107,
        "response_timestamp": "2023-10-22T09:31:31.751Z",
        "response_id": 26028185
    },
    "results": [
        {
            "id": "994800573301326133",
            "url": "https://www.airbnb.com/rooms/994800573301326133",
            "deeplink": "https://www.airbnb.com/rooms/994800573301326133?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 1,
            "name": "Prime 3 - Vibrant One Bedroom Apartment in Powai.",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/978645be-42b6-45ad-8fae-8a1f51d30385.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5c3e1d23-8a9b-40dd-a88b-0104238e5f94.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3dd141dc-8801-4c38-be39-d9ab78550427.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/52bd7419-b976-4e8a-bb14-cff926c02dbd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/afc64bcc-1c43-4149-8b55-449f8b9e263b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5f20c712-808c-46cd-8af5-ee88fb4f3424.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/76ef95fd-d5eb-45c0-9980-5b59e5512130.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e9752f05-5b2d-4ae1-b533-5f821424679a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3e67586c-c1da-45f4-956a-669a10d68a74.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/70f05550-cf07-4f0b-89fd-60d499dcf6e6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d85cb0c7-cf22-4cdb-b410-e88a3c28772a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5a44d847-e02c-4266-b1c8-b7c1c07577b4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d144cd6d-5a26-43da-bc5e-c2abc86ca123.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4e0a0e05-ac0f-45f6-a906-cd6a95e199de.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0eed32d3-077b-4b29-a319-f4af0fbfb0a4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4fc83186-b75f-49d5-85df-9de86a8aca98.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/97a2af51-54dc-48bd-a09c-4469829cb0fc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e48803b0-8067-4abd-b892-d64dc5d8de0d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4fb0c510-3015-4f6e-9a41-5419b613abe5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2cb56bfd-f53a-4da4-8c90-6bb7a3f74c69.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2697d9a7-f4bf-43fc-affd-231d16e5c7c3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ef272f57-1e48-41d5-80ed-b6b8494419a9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/62aec605-9bc5-4491-b2c5-78b7e9e215c4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/db7d2139-56e3-484e-a25e-6cd15bbdcefa.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/115d77a5-2c6f-4bdd-84e9-589abe599c9a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e4035684-0149-4fd4-bc9e-b2031ef5d0eb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4a0c9c0d-6161-48ca-b0f2-4c076c6f70ae.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9d30236c-4dbe-4b2c-8be6-b9d1d3cb6c37.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fa3a008d-ba3d-457e-a6b0-ba7fbfb63ae7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/af1321a5-446d-4b89-90f5-ec2e23c07b93.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-25487024/original/db33e503-702c-453e-94e3-d74bddefee06.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": true,
            "lat": 19.116981054973262,
            "lng": 72.91224400058796,
            "persons": 2,
            "reviewsCount": 0,
            "type": "Entire rental unit",
            "userId": 25487024,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                73,
                139,
                77,
                21,
                85,
                89,
                665,
                91,
                667,
                93,
                94,
                95,
                671,
                96,
                33,
                98,
                611,
                37,
                101,
                39,
                167,
                40,
                104,
                232,
                41,
                107,
                44,
                236,
                364,
                45,
                46,
                47,
                51,
                54,
                57,
                315
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 6160,
                "currency": "INR",
                "total": 49280,
                "priceItems": [
                    {
                        "title": "₹5,500 x 8 nights",
                        "amount": 44000
                    },
                    {
                        "title": "Taxes",
                        "amount": 5280
                    }
                ]
            }
        },
        {
            "id": "895457395342435615",
            "url": "https://www.airbnb.com/rooms/895457395342435615",
            "deeplink": "https://www.airbnb.com/rooms/895457395342435615?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 2,
            "name": "Bright and sunny master bed in bandra",
            "bathrooms": 2,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/96145616-1d22-414e-b0a0-012953549cfb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/12f06fa8-6bf1-4ae4-82b1-72c1611e1634.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/f8c31362-c3ce-4387-8095-f6a30955fa7a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/a4161bc6-76a4-44f6-bbd1-d6c81a98a265.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/f6c126be-1a17-4387-895b-1fce2ac1d55f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/e2392fee-9862-470b-87cd-a5f3ad122c7b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d768818a-82ad-4cff-a6ca-43ba5d365f99.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/991f24e8-5652-429a-9c50-307bb1eee0e9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/7da1d695-ceac-4663-af01-47ba1a922c3f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/1121deb0-3f3e-4dd8-89a6-5e85b167adf3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/e41f733c-ac77-43ae-be72-a9e9266f3ed5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/8af1762d-6db0-4a35-b5b1-62080d902bb4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/be70fc82-cb82-4105-a58f-211c3d0de931.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/0406df8f-0076-4687-a312-7b579f727d3d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/cae011b4-e475-475a-9c3c-177da05e362f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/c6ec8795-376d-466e-a6ab-25af62f47e31.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-871782428090118719/original/0c5b01d2-7eb8-4e8c-8628-5a05986de8be.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/9bbb88c0-0ca3-4451-b47a-d4bdbb153ac1.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-89267128/original/c02c9c5b-aff2-440d-8e05-f0ca1a61a880.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.04886959782611,
            "lng": 72.8260956169958,
            "persons": 1,
            "reviewsCount": 8,
            "rating": 4.75,
            "type": "Private room in rental unit",
            "userId": 89267128,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                2,
                4,
                5,
                8,
                392,
                137,
                394,
                11,
                15,
                145,
                657,
                146,
                23,
                663,
                665,
                667,
                30,
                415,
                671,
                33,
                34,
                37,
                40,
                42,
                44,
                45,
                46,
                47,
                51,
                179,
                308,
                54,
                185,
                61,
                322,
                73,
                75,
                77,
                79,
                85,
                86,
                87,
                88,
                89,
                90,
                91,
                347,
                93,
                94,
                95,
                96,
                103,
                104,
                107,
                236,
                632,
                251,
                510
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 2448,
                "currency": "INR",
                "total": 19578,
                "priceItems": [
                    {
                        "title": "₹2,000 x 8 nights",
                        "amount": 16000
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 800
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 2554
                    },
                    {
                        "title": "Taxes",
                        "amount": 1824
                    }
                ]
            }
        },
        {
            "id": "554737117076324640",
            "url": "https://www.airbnb.com/rooms/554737117076324640",
            "deeplink": "https://www.airbnb.com/rooms/554737117076324640?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 3,
            "name": "D-Studio Apartment in Juhu - Wabi Sabi",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/6d6e62be-8be4-4bdb-8ef2-613c298967b1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d8599a00-8cf7-48d2-8374-9af7e5a20a8d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/cd4779cf-40dd-4047-a487-a7ef0de21b5e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/999fa497-cfc8-47e0-b351-59dfa312d4e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/253d27ec-db5a-44be-882e-ef2afe0584ea.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/faa8c831-1c9f-425c-ab16-0b48bfff9b91.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3ee5cd73-306d-4d10-8896-2345eafa3c6a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/91e0127d-994a-4dec-818c-a775b33741ed.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c1b47520-10d5-49d5-bb4c-dc30f0c298e6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6fadf2a6-7410-4f4e-8cd0-d7681bcda667.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e9391cf8-8c1a-4b60-b43d-311c140cbf3b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/91c44506-d032-4799-a83e-907b52c51ed3.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-253634896/original/70c22512-51df-48e9-a69c-4678b7015e2e.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.11119,
            "lng": 72.82797,
            "persons": 2,
            "reviewsCount": 79,
            "rating": 4.37,
            "type": "Entire serviced apartment",
            "userId": 253634896,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                8,
                137,
                139,
                77,
                79,
                657,
                21,
                85,
                23,
                89,
                665,
                91,
                667,
                93,
                30,
                94,
                95,
                96,
                672,
                33,
                39,
                40,
                232,
                41,
                44,
                236,
                45,
                46,
                251,
                61
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 5413,
                "currency": "INR",
                "total": 43303,
                "priceItems": [
                    {
                        "title": "₹3,800 x 8 nights",
                        "amount": 30400
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 355
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 5167
                    },
                    {
                        "title": "Taxes",
                        "amount": 7381
                    }
                ]
            }
        },
        {
            "id": "16355476",
            "url": "https://www.airbnb.com/rooms/16355476",
            "deeplink": "https://www.airbnb.com/rooms/16355476?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 4,
            "name": "Eternal Sunshine - Pod room by the Sea",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/187a8e2f-d490-4f4a-85b4-e0cd8b665e4c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/abac03c8-9113-4296-a3c5-d3c5614b8ba8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/502f3173-1598-4c84-860e-8568ca0d1ea0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/67253594-90df-42eb-a976-3b21f09f4b9c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d48e2bd4-ecec-44a3-82c3-fcecde99463d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/46ab1ea7-1680-4c39-90e1-a19ba3a93c1f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6cb99a3f-fd0a-4bbe-b846-61803e99e317.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a73af2a9-e417-4ab1-ad94-6e24c4188773.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/11affe9b-c756-4f27-8df3-591a2adc3f61.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/016f37ca-b99d-4e6f-91c2-9b4fbbc7eef4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/79e06952-6dd9-4cf6-8420-577aeff24e4b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bc80502b-484b-46d0-ac22-0cdd8f780276.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6cb33bae-1932-4532-8769-015344ba3947.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6b0d1d1f-fce2-494d-83f5-2b145f726f7a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/761e8e2b-868a-4bc1-b4e2-d7c25ad08cd0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4b945fc4-ace9-47f5-97ed-9e4e28e54aba.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e3680e24-70f4-4ccb-91bd-0c3c90626281.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7dfe3744-432d-499e-9e8c-47430e610202.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d697db11-ff3b-41a4-9663-f373a9a06f4e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/46244bab-a327-44f0-8ef1-9538f9b33e88.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/90f6f6b8-f937-4456-94ee-b8f78466ed3a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/842e6ba4-a538-425f-bb71-fceca2e7408f.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/adcc8df9-73ad-45ce-858c-9c8621a63e7f.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.06497,
            "lng": 72.82424,
            "persons": 1,
            "reviewsCount": 63,
            "rating": 4.76,
            "type": "Private room in rental unit",
            "userId": 75135224,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                2,
                3,
                4,
                5,
                6,
                8,
                392,
                9,
                11,
                12,
                14,
                15,
                16,
                528,
                21,
                30,
                33,
                34,
                674,
                35,
                36,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                49,
                50,
                51,
                55,
                66,
                74,
                459,
                77,
                85,
                86,
                89,
                90,
                91,
                93,
                94,
                95,
                96,
                227,
                100,
                101,
                109
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 3220,
                "currency": "INR",
                "total": 25760,
                "priceItems": [
                    {
                        "title": "₹2,500 x 8 nights",
                        "amount": 20000
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 1000
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 1000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 3360
                    },
                    {
                        "title": "Taxes",
                        "amount": 2400
                    }
                ]
            }
        },
        {
            "id": "778108573783585645",
            "url": "https://www.airbnb.com/rooms/778108573783585645",
            "deeplink": "https://www.airbnb.com/rooms/778108573783585645?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 5,
            "name": "Studio with Lake View",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 4,
            "city": "Thane",
            "images": [
                "https://a0.muscache.com/im/pictures/fa5be3b8-bfcc-46dd-82d3-9a3112cc0c92.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9e5ccf3d-206a-454e-b2ad-b55f33f9c776.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-778108573783585645/original/714138cf-ed4a-4bda-94a1-0f3c41de0e40.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/190a764a-58f1-4f37-bf78-1286e6a632f3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a5011f32-6eed-4b01-a5c4-ad41c4478467.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4f17fa4d-7981-4766-9e4f-2b48afa97de6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/95f7ae32-34fa-4829-bff2-0c8e54c3af88.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/490ea3e3-884b-41d2-bca3-23cf01938335.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f78c54f4-2fd3-4f97-bdfa-6102b9b9f02f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ac083b73-ca84-4703-bdf8-c8127c101d78.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fa4c4645-412a-4f4c-b9dd-6e190ee06c4d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5c623f08-08f8-4ef1-b0c0-add81e465d89.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7077d50c-79c2-4766-9be3-9ccfb5cf1ad2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-778108573783585645/original/f5c506ea-9e35-40c3-9c2e-98b444838f8b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-778108573783585645/original/95e848e6-68e0-4fbb-aad1-69502c342133.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/9e3a8fd9-38f5-446e-ab66-352571ee6bfe.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/44130708-88df-455c-8674-d4f78d6506fb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9829a437-4e3c-4f4d-b3dc-ea88906122a1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8c7a87ce-6985-4a5d-bced-3b929f20f7d7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2b24891f-41e0-4aad-862e-30bb075263e3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7639e365-a7f7-4535-af8f-e459b6276051.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/89a8cbce-e46b-47ab-a94b-8235c26109c6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/30e1a172-55bc-49fd-b0be-2167d3436fae.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/72c33399-ca4d-46ba-8cd4-168789e196a3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c3712ee9-da48-4cfd-b10a-c6d07f820a01.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-483384921/original/59aae298-f411-4541-9ac5-703a2f5e39f5.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": true,
            "lat": 19.261574116076023,
            "lng": 72.98203970139694,
            "persons": 4,
            "reviewsCount": 43,
            "rating": 4.91,
            "type": "Entire serviced apartment",
            "userId": 483384921,
            "address": "Thane, Maharashtra, India",
            "amenityIds": [
                1,
                129,
                4,
                5,
                133,
                8,
                392,
                9,
                139,
                145,
                657,
                146,
                21,
                23,
                663,
                665,
                667,
                415,
                671,
                672,
                33,
                35,
                36,
                37,
                39,
                40,
                41,
                44,
                45,
                46,
                47,
                308,
                185,
                61,
                73,
                77,
                79,
                85,
                86,
                87,
                89,
                91,
                93,
                94,
                96,
                97,
                611,
                101,
                104,
                232
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 4352,
                "currency": "INR",
                "total": 34815,
                "priceItems": [
                    {
                        "title": "₹3,975 x 8 nights",
                        "amount": 31800
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 4770
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 4541
                    },
                    {
                        "title": "Taxes",
                        "amount": 3244
                    }
                ]
            }
        },
        {
            "id": "874529693695120143",
            "url": "https://www.airbnb.com/rooms/874529693695120143",
            "deeplink": "https://www.airbnb.com/rooms/874529693695120143?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 6,
            "name": "Room in Flat with Sea View",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-874529693695120143/original/d8b06e56-5c0e-46b0-9a46-9eb9f160c9f6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/ec619c3b-3607-4961-8bb0-bc4df14d77b7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-874529693695120143/original/53d84918-d719-4f4d-b141-53a4ab1662ec.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-874529693695120143/original/a60cd422-9c83-4ac2-b8e2-ff23eb30f953.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/4d0e19e9-7e05-4a64-8bca-217af7ac6771.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/874a1d9a-46cf-4ea5-bc5f-e4dc9113771c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/199dfaf2-13f0-430e-8525-b7b5f52f8e42.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/97ac5105-ed65-464e-8e74-ab02609cacc1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6eb2d716-1cd4-472b-82ac-150562b157d6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d767b6d7-4517-4825-a406-db7f9e4b1a8c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/47956939-c2bd-4ae8-85f4-bfcb167b6f1f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f3cd5cbc-b181-4607-845b-a3a270991089.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9490e6c3-9a39-4456-9fb6-a62d671f3b4d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c03e721f-7b86-4405-b3b3-4f571c4c4940.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7e90846a-369c-46e4-a225-83ddf3dbc44e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/04dad373-11f4-4eca-a56b-fd99196f42de.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7e5df38e-36d6-46e4-a08f-b385f8056395.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/87633ebc-e7fe-41e4-ba2b-b07f2119c043.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/eb97cc8c-06aa-4e67-a145-8448945b2e07.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-2751095/original/400e8dff-27f5-43eb-a9eb-7aee311419d2.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 18.995907679065873,
            "lng": 72.82233987003565,
            "persons": 2,
            "reviewsCount": 23,
            "rating": 4.7,
            "type": "Private room in condo",
            "userId": 2751095,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                129,
                4,
                5,
                7,
                8,
                9,
                139,
                12,
                77,
                15,
                79,
                145,
                21,
                85,
                23,
                87,
                663,
                665,
                667,
                93,
                94,
                415,
                96,
                33,
                35,
                227,
                39,
                103,
                40,
                41,
                107,
                44,
                45,
                46,
                51,
                55,
                185,
                61
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 4637,
                "currency": "INR",
                "total": 37094,
                "priceItems": [
                    {
                        "title": "₹4,000 x 8 nights",
                        "amount": 32000
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 3200
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 4838
                    },
                    {
                        "title": "Taxes",
                        "amount": 3456
                    }
                ]
            }
        },
        {
            "id": "978196112180713702",
            "url": "https://www.airbnb.com/rooms/978196112180713702",
            "deeplink": "https://www.airbnb.com/rooms/978196112180713702?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 7,
            "name": "Good view - room & wash near BKC - free breakfast",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/35a41bbf-e45a-43a9-8ccc-acebb39c4d08.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/06f3ee2d-aace-4062-8146-80cab1bacb24.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/157ae86c-7625-4178-8b95-a13c87b358c5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/60cf2f0e-0e94-4f25-9b29-6bcd5d4c7ec8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/58ccc56f-1650-43d5-84d5-72ac26c1005f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/6c207a99-5011-45e1-b8c8-fae08fd82328.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/0b1ac0bf-5251-411f-810c-d193b7ea1bb1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/1526f7aa-7e59-49b6-962b-d52de183bc3f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/44db1269-54d1-4011-820d-7b85bcc6711a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679653565792782805/original/1d9dcfd4-01a8-4312-b7cd-8f75439deb7e.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/2eb3216c-8d49-4078-afe7-1e28740a047d.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.073441322808602,
            "lng": 72.86588178021401,
            "persons": 3,
            "reviewsCount": 4,
            "rating": 4,
            "type": "Private room in rental unit",
            "userId": 415802144,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                2,
                4,
                5,
                8,
                9,
                11,
                139,
                12,
                77,
                79,
                16,
                21,
                85,
                86,
                663,
                89,
                91,
                93,
                94,
                671,
                96,
                33,
                98,
                35,
                37,
                39,
                103,
                167,
                40,
                104,
                41,
                42,
                107,
                236,
                46,
                47,
                51,
                55,
                61
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 3977,
                "currency": "INR",
                "total": 31814,
                "priceItems": [
                    {
                        "title": "₹3,250 x 8 nights",
                        "amount": 26000
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 1300
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 4150
                    },
                    {
                        "title": "Taxes",
                        "amount": 2964
                    }
                ]
            }
        },
        {
            "id": "805427090409095798",
            "url": "https://www.airbnb.com/rooms/805427090409095798",
            "deeplink": "https://www.airbnb.com/rooms/805427090409095798?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 8,
            "name": "hypestays4 - stylish room",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/826b458e-116a-4dfc-b11c-c081beb83a51.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-805427090409095798/original/52286e04-da94-459c-b784-75ad1e3a940a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-805427090409095798/original/62517061-16a6-498d-9f0d-eb371e85a715.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-805427090409095798/original/21a43dfb-85c2-4420-b531-14ff389ee657.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-805427090409095798/original/a55b5970-de24-4484-b93b-cfa80274fe95.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-805427090409095798/original/89e0b062-9462-4e2f-953e-9ce0e26e4989.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-805427090409095798/original/1fb4d696-65c6-4a42-bf7f-7f72d7c9270c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-805427090409095798/original/53fb9cfa-d83c-4255-9681-2bc9fa722415.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/2b692329-e324-4ab0-8c91-eb1aab7e543f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/85085756-cb9a-42dd-bab4-df6d5e7b8e26.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/69e1afc2-ee23-43a0-bf23-c6f886270ff3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/69144333-bd63-4d95-abdd-ebc909bcbc17.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a02f362f-6cf6-40fe-9f0a-77d1f579e735.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/013eafdf-6389-44a9-8bcf-2cbdcb10fcac.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/05b7d747-2672-4c03-b149-0f0f541a2f5b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1eb475d6-6eb5-4bd5-adb1-e120e1106b0f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5167c812-9c54-48ce-999e-a56248341b98.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3c792515-9f43-4295-bf51-55ded6e846d5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e4230c38-cee5-49b3-abae-c17bf4ccfdb2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/71b6cd59-acd8-4e18-8f54-d936fbdd1006.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e9159189-f064-4173-81bd-93a88987171e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d1991ef0-ce8d-42c5-89ee-34cb2e86aab6.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7f2d64eb-dd81-4721-bee3-176a4293e49a.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.14923,
            "lng": 72.83673,
            "persons": 2,
            "reviewsCount": 14,
            "rating": 5,
            "type": "Private room in rental unit",
            "userId": 301406671,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                33,
                4,
                5,
                8,
                9,
                42,
                45,
                46,
                94,
                47
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 4479,
                "currency": "INR",
                "total": 35831,
                "priceItems": [
                    {
                        "title": "₹3,999 x 8 nights",
                        "amount": 31992
                    },
                    {
                        "title": "Taxes",
                        "amount": 3839
                    }
                ]
            }
        },
        {
            "id": "753560768628486688",
            "url": "https://www.airbnb.com/rooms/753560768628486688",
            "deeplink": "https://www.airbnb.com/rooms/753560768628486688?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 9,
            "name": "HS - panoramic view",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/80985bd6-998b-4ac2-b707-570d692957ca.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d1426579-be3f-40e9-bc06-9ef98726c0a8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/59aeb082-43d0-40e5-b27b-50228e10b21e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e7ee4195-a7c6-4d8b-b007-6bf1135b341e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-753560768628486688/original/fcd64996-3401-47cb-bc3f-be995352eae4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/7b728c49-6227-41dc-b593-d165c74fdc24.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/cd69531d-5e57-4da0-a7be-d59b1af57978.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/35b7c5fe-0968-4b61-be53-e869704d9782.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4ac24ff1-e2ab-4a00-95cb-c2ff8e4390ae.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/cad0a491-0f4d-428d-a9a9-d0329d70be98.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b6e310d4-c821-474e-b52b-8e67f65f6751.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b2da9821-7192-4cd5-9d73-02c7bd202bba.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/16e5f626-559e-4522-902f-4e49cd98a81b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9ab4d12c-8a22-4b6f-a7b7-82637648fbf8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/64de3d5e-51b3-40ba-a0ca-8ecb5197185e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c69451ec-6c62-4bc5-8f85-feeb291d10a9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a8e3364f-529e-4dfc-80f2-d131f8fbfb5c.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7f2d64eb-dd81-4721-bee3-176a4293e49a.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.12717,
            "lng": 72.83316,
            "persons": 2,
            "reviewsCount": 21,
            "rating": 4.57,
            "type": "Private room in condo",
            "userId": 301406671,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                33,
                674,
                4,
                100,
                5,
                8,
                40,
                232,
                9,
                73,
                11,
                44,
                45,
                46,
                47,
                79,
                85,
                665,
                90,
                91,
                93,
                94,
                671
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 4479,
                "currency": "INR",
                "total": 35831,
                "priceItems": [
                    {
                        "title": "₹3,999 x 8 nights",
                        "amount": 31992
                    },
                    {
                        "title": "Taxes",
                        "amount": 3839
                    }
                ]
            }
        },
        {
            "id": "897499007319585487",
            "url": "https://www.airbnb.com/rooms/897499007319585487",
            "deeplink": "https://www.airbnb.com/rooms/897499007319585487?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 10,
            "name": "Private Room in a 3 room Flat",
            "bathrooms": 2,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/952394f3-a7ca-4802-a57c-555b5fa9c99f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9c9fe546-8471-4967-b760-c65aacb4f5d1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/605b8c66-d211-494f-9dc0-65ada2a42ee2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6fff1141-adbf-41a6-a411-4fafdcf65d8d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4f7b08b8-9fa9-4ee3-94df-ad5556d80901.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f968816d-f1e8-4b5a-a0bb-80d7877e38dd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9aa20a21-8955-4c43-944e-7c5df5a0a036.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e7ae34d5-1d4c-4529-adac-5e35ef8df6cf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bb86f077-5755-417a-98d4-ee185bac69ce.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b2c63a25-8182-4d1e-917b-ffe47e1a1552.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/12a10789-8190-425b-9b39-fdfff5c7a004.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/975b53f4-5f9f-4dfe-a4e7-703d9c7c1ae1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c4b683a9-5505-40ff-8cc6-c5eef71dd562.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-514880038/original/de5b24e5-4c3d-4ac4-9fd9-840d2c28522d.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.0871685,
            "lng": 72.8430551,
            "persons": 1,
            "reviewsCount": 7,
            "rating": 5,
            "type": "Private room in rental unit",
            "userId": 514880038,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                33,
                129,
                4,
                5,
                40,
                107,
                45,
                93,
                46,
                47
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 2364,
                "currency": "INR",
                "total": 18908,
                "priceItems": [
                    {
                        "title": "₹1,800 x 8 nights",
                        "amount": 14400
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 720
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 1000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 2466
                    },
                    {
                        "title": "Taxes",
                        "amount": 1762
                    }
                ]
            }
        },
        {
            "id": "677825211483890705",
            "url": "https://www.airbnb.com/rooms/677825211483890705",
            "deeplink": "https://www.airbnb.com/rooms/677825211483890705?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 11,
            "name": "Urest -Women Only Hotel (Single Standard Room)",
            "bathrooms": 10,
            "bedrooms": 10,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/70b2e500-fdb2-4f45-980a-fab9e0d0ef20.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/d2d28991-3965-4eb9-a0bb-040c540b1071.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/1e8742eb-db97-4988-9d63-98bd80e0ceed.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/f62e81ca-e500-4008-9e15-1ca511e0acbd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/71b8b485-d4ad-49b5-9f4a-4f55537e82cd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/00d6d8a1-d019-443d-99b2-b1e750d1b0d5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/97325b6c-3e92-4e77-a8e8-751f0525d0d9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/1d0bcb1c-5eac-416f-89b3-1fbbca36945e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/88102bdf-1ba8-4ed3-a5ea-789371a61bb7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/06ade370-5357-48c0-b812-55f8dcbad096.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/cd83f348-0df3-40fe-8f3f-e3bcbce9c50a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-677825211483890705/original/9b8bb253-688d-40b1-9bda-15f7cfb6facb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-677825211483890705/original/84780385-86f5-4756-a6e6-97e42593cbd2.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-677825211483890705/original/c52ab058-6b89-49b5-8350-11913b4debd4.png?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/aaaae952-2f6e-4056-86ed-9f898ad18c02.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.0370593,
            "lng": 72.84056,
            "persons": 1,
            "reviewsCount": 13,
            "rating": 4.85,
            "type": "Room in hotel",
            "userId": 469194446,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                16,
                32,
                3,
                5,
                21,
                101,
                90,
                91,
                93,
                47
            ],
            "previewAmenities": [
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 3920,
                "currency": "INR",
                "total": 31360,
                "priceItems": [
                    {
                        "title": "₹3,500 x 8 nights",
                        "amount": 28000
                    },
                    {
                        "title": "Taxes",
                        "amount": 3360
                    }
                ]
            }
        },
        {
            "id": "47963979",
            "url": "https://www.airbnb.com/rooms/47963979",
            "deeplink": "https://www.airbnb.com/rooms/47963979?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 12,
            "name": "Elite Homes 5, Andheri - East",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/d38edf0b-1170-4156-b864-7f7a8396c509.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/9c5390a8-dd76-4b4f-94c9-66d720de2211.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/71c29c60-4ac6-4d7b-b114-bbddb1bab64c.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/6bec3403-7a61-4bff-b71e-1d33e3d9c392.png?im_w=720",
                "https://a0.muscache.com/im/pictures/5d939e90-1046-4730-9392-bcd1855e5cea.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c64b7f95-3668-4edb-a4c7-6edce3516664.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ccf42044-bd5c-4b9b-a303-64447cf229f6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9dc8f540-fe19-47a4-aacc-5bc1b1cb6d6d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/88d135bf-5aab-4ab0-9af1-e5e2bf392bcc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d64d507c-954d-46aa-8248-52b8c79d65f5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fae4df18-e230-4744-ab4f-0e74a7dd503d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ca6e4503-fd51-4631-8d06-04c42a277c88.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9f9eb7d9-4d4a-4e47-8726-54627f6947d0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0171c240-9db3-4574-9b5e-35bf65fa0d35.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/c8e40dec-b891-4dab-8d0b-39f5bfcafc26.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/f080fb45-a78b-4809-b50f-86c02b86c1ed.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/7158468f-cb7a-452d-98ac-396adc25a73a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/392f1bb8-d23b-479f-89d1-ffa5d3c6b77c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/7ceb9e22-6edb-4f63-b2af-8b0aa99495eb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/ee9a286e-60ad-480f-afc6-39895fa5e18c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/27937d12-0854-47ab-8b71-099e90de3b81.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/2e02ba7d-5334-4e20-b121-433220eb538b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/7bd7f6e0-f8f7-4cb4-820e-3176c984579d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/41a32cf7-7b64-4d89-9f5f-be3bb2f982a1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/fb4d6ec3-d1d6-46ca-8111-bfd2530029b3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/ac3511d0-4c0a-45f1-80bb-5b2447ca6fe3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/41cdff4a-cd6f-4c16-babf-bd79ce5f0f0f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/135c3b55-ab0a-42b7-93f1-a6179e5d6216.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/05dc4162-6289-414e-b411-eb84e11f105d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47963979/original/0de55660-86ae-4eae-8946-b2ef9252ea2b.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5653600a-2344-4330-956a-1c1f4a8916bd.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.110142,
            "lng": 72.852173,
            "persons": 2,
            "reviewsCount": 58,
            "rating": 4.55,
            "type": "Private room in bed and breakfast",
            "userId": 354533151,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                11,
                139,
                12,
                77,
                79,
                16,
                657,
                211,
                85,
                23,
                30,
                671,
                35,
                611,
                37,
                39,
                103,
                40,
                104,
                232,
                41,
                42,
                107,
                44,
                46,
                47,
                57
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 3607,
                "currency": "INR",
                "total": 28851,
                "priceItems": [
                    {
                        "title": "₹2,800 x 8 nights",
                        "amount": 22400
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 3763
                    },
                    {
                        "title": "Taxes",
                        "amount": 2688
                    }
                ]
            }
        },
        {
            "id": "49107313",
            "url": "https://www.airbnb.com/rooms/49107313",
            "deeplink": "https://www.airbnb.com/rooms/49107313?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 13,
            "name": "Private Room with Free Wi-Fi & Open Kitchen Mumbai",
            "bathrooms": 0,
            "beds": 2,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/85e91281-4b25-4d43-820b-44d50e63578c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/94faa8f7-a777-4925-9b07-3ddb825b2356.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d1e9fc2a-b146-4af9-9747-362f48abaa94.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/64b3c2b4-ca0a-42e0-97bb-3c1a54e31fca.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1ca3d3a7-67b6-4b5a-9a83-cd50628be4eb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bf304c21-454d-417e-b88b-78ba45b5f01f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a42d6310-f5ed-43c6-bc4b-428e8bda50da.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b62698b9-5db4-4982-9067-ec9946284d58.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e512fee8-529c-491c-8ace-899e92aa95e7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/afcda15a-f9c3-4045-b24f-8ad464f71219.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/b9fe2aa8-f524-45bc-9c6b-4dd9583613e2.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.15406,
            "lng": 72.88389,
            "persons": 1,
            "reviewsCount": 9,
            "rating": 4.67,
            "type": "Private room in rental unit",
            "userId": 381554960,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                4,
                8,
                394,
                11,
                139,
                12,
                79,
                21,
                85,
                86,
                665,
                91,
                93,
                30,
                94,
                671,
                96,
                672,
                33,
                34,
                611,
                103,
                40,
                104,
                41,
                42,
                44,
                236,
                46,
                47,
                51,
                308,
                55,
                185,
                61
            ],
            "previewAmenities": [
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 1498,
                "currency": "INR",
                "total": 11978,
                "priceItems": [
                    {
                        "title": "₹1,550 x 8 nights",
                        "amount": 12400
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 3100
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 1562
                    },
                    {
                        "title": "Taxes",
                        "amount": 1116
                    }
                ]
            }
        },
        {
            "id": "47132130",
            "url": "https://www.airbnb.com/rooms/47132130",
            "deeplink": "https://www.airbnb.com/rooms/47132130?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 14,
            "name": "Studio with open Terrace!!!",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 2,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/9b1e26a2-b49d-44f5-b29f-571d59da39d0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1aa1d02e-bfd2-4b64-8f3f-b6b69986f7df.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8569daa2-f56e-42d0-b2ef-532d3d84fb77.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7ba6f8e9-f791-4825-af4e-482ce833d340.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1e02576c-5590-4b60-8501-6c8bd76aeaed.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a6537c51-84b1-428c-83d0-7a797e0c535e.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.11039,
            "lng": 72.86786,
            "persons": 2,
            "reviewsCount": 60,
            "rating": 4.55,
            "type": "Private room in bungalow",
            "userId": 70971806,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                9,
                139,
                12,
                77,
                85,
                23,
                87,
                663,
                671,
                100,
                103,
                104,
                232,
                42,
                44,
                45,
                46,
                47,
                51,
                54,
                57,
                61
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 1852,
                "currency": "INR",
                "total": 14812,
                "priceItems": [
                    {
                        "title": "₹1,500 x 8 nights",
                        "amount": 12000
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 600
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 100
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 1932
                    },
                    {
                        "title": "Taxes",
                        "amount": 1380
                    }
                ]
            }
        },
        {
            "id": "743789002272530228",
            "url": "https://www.airbnb.com/rooms/743789002272530228",
            "deeplink": "https://www.airbnb.com/rooms/743789002272530228?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 15,
            "name": "Private bedroom, in a shared home in Borivali west",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/049f9977-3d8d-4eea-b650-86687b518004.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/ffb0f34d-8765-4c53-85aa-bf9abb129691.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/1e6b99f7-7506-42ea-ad9b-dda23f3675e2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/72dc9532-3c2a-4a8b-9784-f95c652bccf3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/0ae8ed38-f8b0-455a-9b51-6688d7afb5e6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/9c0f81e3-99ed-4bd9-a872-f97ad527a1fb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/91fad7b3-b792-47a8-a80c-19a07131ea0a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/b2038bcf-63df-498c-b3de-e20ff3fbe386.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/523efc0d-7312-4a0f-a15a-debacb88193c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/9ec5fdc6-f1fa-4039-88d6-339eb3a2d136.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/7f810809-d779-44b1-9fb9-c7d1081b0b07.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/27577292-f4c1-40bb-9dca-d785f77e8172.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-743789002272530228/original/f209f465-cade-4330-8928-c4738b1b7c63.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/8ad74771-9705-42ca-8b6e-4b0cb97cf510.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.23536,
            "lng": 72.84648,
            "persons": 2,
            "reviewsCount": 9,
            "rating": 4.89,
            "type": "Private room in home",
            "userId": 191687092,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                8,
                394,
                139,
                12,
                77,
                21,
                85,
                86,
                23,
                89,
                91,
                667,
                92,
                93,
                94,
                287,
                671,
                96,
                672,
                33,
                40,
                104,
                42,
                44,
                236,
                45,
                46,
                47,
                51,
                52,
                308
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 2554,
                "currency": "INR",
                "total": 20429,
                "priceItems": [
                    {
                        "title": "₹2,400 x 8 nights",
                        "amount": 19200
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 960
                    },
                    {
                        "title": "Taxes",
                        "amount": 2189
                    }
                ]
            }
        },
        {
            "id": "975929617921900997",
            "url": "https://www.airbnb.com/rooms/975929617921900997",
            "deeplink": "https://www.airbnb.com/rooms/975929617921900997?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 16,
            "name": "Arty Villa with Sea View in Versova, Mumbai",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/hosting/Hosting-975929617921900997/original/997f1e1f-0eda-4f76-819c-37da85a9f3ba.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/7fd2b2fe-0f3f-4a6b-b29b-50686b9091c9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-975929617921900997/original/ecdc40ff-1ae9-438a-9e1c-54382b8fdf5e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/26320ddb-a5d4-4f19-9e69-e8a346a21055.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a4628fef-ab8f-4240-a2ba-63d857b3cf8e.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/b5b6673c-5d2e-4968-8aa0-39df381f0511.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.13019649042088,
            "lng": 72.81331321125226,
            "persons": 2,
            "reviewsCount": 5,
            "rating": 4.6,
            "type": "Private room in home",
            "userId": 143346767,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                674,
                4,
                5,
                8,
                510
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 2594,
                "currency": "INR",
                "total": 20745,
                "priceItems": [
                    {
                        "title": "₹2,165 x 8 nights",
                        "amount": 17318
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 1212
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 2706
                    },
                    {
                        "title": "Taxes",
                        "amount": 1933
                    }
                ]
            }
        },
        {
            "id": "20649046",
            "url": "https://www.airbnb.com/rooms/20649046",
            "deeplink": "https://www.airbnb.com/rooms/20649046?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 17,
            "name": "Serene One Bedroom Apartment in Prabhadevi",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/ced9bcdf-ebf1-4db5-8519-38f5673ceaa9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/be3aca1c-0559-4939-8d58-af55760a7e11.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5f655780-7564-4308-a851-c5b3b2605e79.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6801af0b-c0a0-4a6a-a332-89aee6ce29ef.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3b231fad-682f-4e25-b5d0-cc6bcfdda7ba.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/faa55fc0-1c01-40e0-8d97-9553ef155669.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5af571cc-e2b3-45e0-b113-f93fc8f97615.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1e2b4821-6b8c-4ade-8b2d-a7aebf5be523.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/cc48bec1-d28f-4ab0-b7a8-435f80faabbb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/87c96bce-c164-44c3-a0c5-92697e513cb1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fcc92b19-d65f-4479-8aba-ddf4738a4c80.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/08d3423b-1d31-4881-8009-152712ca030c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c5a39912-19e2-47c5-9b21-f10290849132.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9e05ff24-977c-4ef3-b142-a818f3fbaa03.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0197510f-e04f-45a7-b330-85e490393524.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7ee5496e-f887-44a1-8825-fc61c47cfe35.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5b638b28-d3fc-4cfb-8db4-4e2e0f25df53.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.01754,
            "lng": 72.82623,
            "persons": 2,
            "reviewsCount": 49,
            "rating": 4.98,
            "type": "Entire rental unit",
            "userId": 71425959,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                129,
                2,
                4,
                5,
                8,
                73,
                137,
                11,
                77,
                79,
                21,
                85,
                86,
                89,
                91,
                667,
                93,
                94,
                95,
                671,
                96,
                672,
                611,
                100,
                37,
                38,
                167,
                40,
                104,
                41,
                42,
                44,
                236,
                45,
                46,
                308,
                251
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 5146,
                "currency": "INR",
                "total": 41164,
                "priceItems": [
                    {
                        "title": "₹4,300 x 8 nights",
                        "amount": 34400
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 3440
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 1000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 5369
                    },
                    {
                        "title": "Taxes",
                        "amount": 3835
                    }
                ]
            }
        },
        {
            "id": "53085590",
            "url": "https://www.airbnb.com/rooms/53085590",
            "deeplink": "https://www.airbnb.com/rooms/53085590?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 18,
            "name": "Clean family accommodation near BKC US consulate",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/22cf9bcf-d4e2-4c5a-9ad4-6b57fb03b88d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0f495369-ddb3-4687-86f0-b7748410a07c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9073afcb-cd84-4eee-a5c5-94f918c58962.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/93f5bd28-566d-49f7-b537-da7c876d933c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/876d6590-8474-4d3d-b048-d4e6acbf1469.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9dc8e6c6-da76-4dfa-846d-9221013e4bf5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/844f3317-cf6a-4ae7-b1e8-59d13ff538c7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/432e1c4b-cb0d-41eb-8950-cdd3c9bed319.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9ac51d8f-1371-4300-ac9f-439567d3539e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/9f638d26-3fe3-4b79-9833-6cafc718a35c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/862847d7-6fe3-4598-a944-2736aa19bd48.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/ac7b86be-0916-415c-9fe9-23d707b390c8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/126025d9-7cbc-4197-ac34-9937b8216c39.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0ae69d82-7a57-475e-bdd3-7b6378cdf668.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/c12cca5d-589f-4f50-86c5-281633a97b6f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/cb873e28-8102-4c82-9d6f-da5b4d982fbc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/10758748-6c3a-4500-843d-0d8049d0cd27.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/c0668aa0-1841-45a8-ab86-76869c43bb45.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/99f52e53-f141-4f97-8288-b6286783be49.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/c7f9894e-ba17-4881-b5c1-c9aca8284457.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/527ea97a-ac66-474b-ae74-bea31ca7d2fa.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53085590/original/c80565c6-eb82-4997-8661-4859da0498bd.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/4097071f-eccd-4faa-b809-d3d29d225c93.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.05789,
            "lng": 72.84569,
            "persons": 2,
            "reviewsCount": 17,
            "rating": 4.47,
            "type": "Private room in serviced apartment",
            "userId": 307615762,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                65,
                2,
                67,
                4,
                5,
                9,
                73,
                77,
                16,
                21,
                85,
                86,
                89,
                91,
                667,
                93,
                30,
                95,
                32,
                33,
                37,
                39,
                103,
                40,
                104,
                41,
                42,
                107,
                44,
                46,
                47,
                51,
                55,
                57,
                60
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 4704,
                "currency": "INR",
                "total": 37632,
                "priceItems": [
                    {
                        "title": "₹4,200 x 8 nights",
                        "amount": 33600
                    },
                    {
                        "title": "Taxes",
                        "amount": 4032
                    }
                ]
            }
        },
        {
            "id": "704175807329714275",
            "url": "https://www.airbnb.com/rooms/704175807329714275",
            "deeplink": "https://www.airbnb.com/rooms/704175807329714275?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 19,
            "name": "The comfort of home. The luxury of space.",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/a0ed845b-bd0f-438d-ac60-1e5f3fa25043.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/1afe93a5-407c-4628-8882-1becd585129f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/7982b551-b879-45de-bd88-ea2faa44e8bc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/b4faa2b1-56a7-4d04-873d-d70a14da4565.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/c7029a12-39ec-46ee-b9e9-a8609bec29d6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/08b390a7-994c-4e5f-8a7d-d489475d2f45.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/d00755f9-8b7a-4950-ba22-1d9200ee6e55.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/7f9791da-10b6-423d-b9f2-f7f59f38cbf5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/fe0bf3cb-73ac-497e-b0af-d46579235053.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/038c3c4d-8d1c-49f7-ac4c-7ef390e5f508.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/35f4fdb5-498d-4667-b672-0593c2ac899b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/e51a5e7f-12c2-4b4f-b11f-1b09e5b584b6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/5ac2a6ee-e3b3-4a3f-ad4f-17b72846db31.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/c4176138-20cd-4551-a477-934db006989d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/6bea145e-0ea1-4045-bad9-4582ccad69d8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-704175807329714275/original/15ef05e4-87af-40aa-b1f6-c670a29e47de.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-476511904/original/c3e22e6b-b140-4b45-9cee-ab0fb1b509b6.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.1287933,
            "lng": 72.862577,
            "persons": 2,
            "reviewsCount": 7,
            "rating": 5,
            "type": "Private room in bungalow",
            "userId": 476511904,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                64,
                1,
                4,
                5,
                9,
                73,
                137,
                77,
                146,
                85,
                86,
                23,
                87,
                280,
                89,
                91,
                667,
                92,
                93,
                94,
                95,
                671,
                33,
                34,
                611,
                100,
                39,
                103,
                40,
                104,
                41,
                42,
                44,
                236,
                46,
                47,
                51,
                55,
                251
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 3766,
                "currency": "INR",
                "total": 30128,
                "priceItems": [
                    {
                        "title": "₹3,750 x 8 nights",
                        "amount": 30000
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 3900
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 800
                    },
                    {
                        "title": "Taxes",
                        "amount": 3228
                    }
                ]
            }
        },
        {
            "id": "603382652784408104",
            "url": "https://www.airbnb.com/rooms/603382652784408104",
            "deeplink": "https://www.airbnb.com/rooms/603382652784408104?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 20,
            "name": "Private Luxury AC Room Malad West BnB",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-603382652784408104/original/e02ad542-e21d-416d-99f2-0f8e9a321335.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-603382652784408104/original/14ae5b00-66ee-4ef9-8ab2-c9d596569cbc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-603382652784408104/original/2963fa60-9573-4286-9e79-6b2dee13ae2b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-603382652784408104/original/f58c48aa-ea3c-414c-b0c4-b17c8af9d568.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-603382652784408104/original/4c15e93d-4ca7-4120-bc02-637e0a2a4947.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-603382652784408104/original/b4cab31d-73ee-4a5d-8db3-4bf9955dda61.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-603382652784408104/original/f3563b05-d49e-459a-abdb-972fb4c27397.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-603382652784408104/original/7bc42aa2-cb80-4390-8859-374d8c875ef3.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/c157600d-7d4d-4b2e-a16c-79be666dfa42.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.176855,
            "lng": 72.840874,
            "persons": 2,
            "reviewsCount": 42,
            "rating": 4.6,
            "type": "Private room in bed and breakfast",
            "userId": 26573493,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                129,
                4,
                5,
                8,
                392,
                9,
                137,
                521,
                394,
                11,
                139,
                16,
                145,
                657,
                146,
                21,
                23,
                663,
                280,
                665,
                667,
                30,
                415,
                671,
                32,
                672,
                33,
                674,
                35,
                36,
                37,
                39,
                40,
                41,
                42,
                44,
                46,
                47,
                179,
                308,
                57,
                315,
                60,
                61,
                62,
                65,
                67,
                68,
                71,
                73,
                77,
                79,
                85,
                86,
                89,
                91,
                92,
                93,
                94,
                96,
                611,
                100,
                103,
                104,
                232,
                107
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 2995,
                "currency": "INR",
                "total": 23957,
                "priceItems": [
                    {
                        "title": "₹2,325 x 8 nights",
                        "amount": 18600
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 3125
                    },
                    {
                        "title": "Taxes",
                        "amount": 2232
                    }
                ]
            }
        },
        {
            "id": "10621010",
            "url": "https://www.airbnb.com/rooms/10621010",
            "deeplink": "https://www.airbnb.com/rooms/10621010?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 21,
            "name": "1#Boutique Bombay Homestay",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 2,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/22d3baf4-063e-4029-b9d0-e78168f0ef4b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c505c3f5-b63b-448b-8651-3ee564a250a4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3fdac4d8-7b26-4408-9744-20b8e77542b3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/45fe5df1-6d71-4090-8c4d-b1d7c7a3da58.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4e285310-12bb-42d1-99f6-62d00dc88871.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2abfcb15-99ba-43ef-a77b-067981a07746.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8827df95-eb22-4097-8be6-907c7c0210ea.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/573742e3-e12c-4004-80fa-9e00c15030fc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1a2fb165-53b2-4282-b250-3648786dd5bc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/84a0ba15-1501-46a7-985e-6b3dfde29e33.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/34cb9af1-7d02-4f28-a0e8-372be34d78b4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3c64294b-e550-48bd-a17f-4fdbbbaeaebd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bbfde04c-6b80-4aa7-9260-7345cfcf0b26.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9af298ca-679f-4ea7-8f1b-43e6871e6360.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/49d4726b-0e58-432b-832e-abdf4ed433a9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c4d5c060-c5cb-4504-942f-825fc5602215.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c5b03ac4-6cdf-458c-83bd-679131981f6f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2963bdc3-6935-4e9b-8d81-48c9a7783ddb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/24006271-9ca1-4d64-9c91-aaa5c1b8b29c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fdc2ba21-1ecb-433a-9d07-c94f73f8f598.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8a78e40c-a8c4-4c10-ac33-f161dee5e0c5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f7d98b39-742a-4dcb-bc8a-0c00a178445b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8057ff06-d1e1-4bd6-af5d-371ec550a54b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/27b1a45d-4cd3-4c7e-a152-c825a2b73b25.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/832de3ae-fa2b-4243-b11f-41d1c45b824a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3df7c696-a6f9-449c-9970-aa5452fde1fe.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b1b96b7f-8a55-4fad-ab16-dd1959e31dda.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0adbdfda-fa23-4ab9-843a-4dafc39fb611.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9d885f4a-2c18-4d1f-86db-69a09ef15cd9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5da0c6c6-cb0d-41e0-80c6-ac549aaaf0cc.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a3d43251-b250-474d-939b-eeb9efe9587f.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.25291,
            "lng": 72.85808,
            "persons": 2,
            "reviewsCount": 103,
            "rating": 4.87,
            "type": "Private room in bungalow",
            "userId": 54818321,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                129,
                4,
                6,
                8,
                9,
                137,
                394,
                11,
                139,
                16,
                17,
                18,
                146,
                661,
                23,
                663,
                280,
                665,
                31,
                415,
                672,
                33,
                34,
                37,
                40,
                41,
                42,
                44,
                45,
                46,
                47,
                179,
                308,
                56,
                57,
                61,
                65,
                66,
                67,
                71,
                73,
                201,
                77,
                79,
                211,
                85,
                86,
                91,
                347,
                93,
                94,
                96,
                98,
                99,
                611,
                100,
                101,
                103,
                104,
                107,
                363,
                236,
                109,
                113,
                627,
                117,
                118,
                251,
                125,
                127
            ],
            "previewAmenities": [
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 3545,
                "currency": "INR",
                "total": 28357,
                "priceItems": [
                    {
                        "title": "₹3,200 x 8 nights",
                        "amount": 25600
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 3584
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 3699
                    },
                    {
                        "title": "Taxes",
                        "amount": 2642
                    }
                ]
            }
        },
        {
            "id": "1006219184037651989",
            "url": "https://www.airbnb.com/rooms/1006219184037651989",
            "deeplink": "https://www.airbnb.com/rooms/1006219184037651989?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 22,
            "name": "Sahukar Home",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/3d08d4b4-1d9f-4fae-870b-5568bf534b18.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/afc73f9e-59f1-4206-9e13-98a1b17aad73.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/171577cd-9a36-4b8e-b2bd-9e678ef44645.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/798ad54e-a916-48cc-97ef-6a528e4b4d43.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/db689cab-8b6a-4cdc-a7e2-f9b9e84a6cc3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/17b26440-0b8e-4302-847e-072cc8a6a5fc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/baf9ca26-d26c-4004-8e70-12314366cd73.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/ec71e2f8-64f9-4eb3-bd94-a60ec32cb03c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/6f443bd1-e341-4353-877f-52cb92887e42.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/ea7b982e-520d-4a3c-947c-01c12432855b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/563f1e01-6a28-4c0b-9f37-088f1242535d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/d26d9f05-b588-4269-86a8-fe380b9bf0e3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/c1ed23fb-8759-42f5-976a-52c1c4623189.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/9dbfe1a7-b66b-4e08-81bd-8bddc34f12eb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1006219184037651989/original/736c0888-1485-40e0-ac04-cac6910bf94d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/d2925cd6-6260-4dd5-805f-3cec40d1ae95.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/29f78a47-11b8-432d-8ddd-f069e4e6cfe4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/932e5f11-000d-447f-a59d-923792fd3bb1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8a2a12b9-eb63-4e6c-bcca-4a6f3b102ddb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a51d69b2-ab3f-470c-836e-a5af24b901e2.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=S&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.197425794319084,
            "lng": 72.87128844275794,
            "persons": 2,
            "reviewsCount": 0,
            "type": "Private room in rental unit",
            "userId": 542653038,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                33,
                129,
                35,
                4,
                36,
                5,
                37,
                39,
                8,
                9,
                47,
                287
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 2576,
                "currency": "INR",
                "total": 20608,
                "priceItems": [
                    {
                        "title": "₹2,500 x 8 nights",
                        "amount": 20000
                    },
                    {
                        "title": "Special offer",
                        "amount": 4000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 2688
                    },
                    {
                        "title": "Taxes",
                        "amount": 1920
                    }
                ]
            }
        },
        {
            "id": "888373428639769525",
            "url": "https://www.airbnb.com/rooms/888373428639769525",
            "deeplink": "https://www.airbnb.com/rooms/888373428639769525?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 23,
            "name": "Entire 1 BR For Family/Corporate",
            "bathrooms": 2,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/44ff72c4-06be-4dee-9fa7-6299fa1de830.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/cd4f098e-ffcc-4d43-8dcc-76d581748a23.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dba5870e-cff3-4a3b-9516-7ca99d135805.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/be62e3f2-6e23-42d7-9339-f9234da84045.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/17bf48d2-1d41-43ae-8d89-4c928f633f6d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/34fa38a2-695a-4fa2-bff8-5c73ba4c1a56.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2ff85d2a-b4dc-4881-8c60-8a21b94c9f8f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bfbd0c6e-9318-4b9d-af90-01c38514e8a5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/19d80c57-8bff-4a2f-9df5-4aafbbb94765.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/67e9a7ad-209f-44a9-ac0a-38199954e6c9.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/d74c9628-752a-47f3-9beb-2dac9988b41b.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.17912,
            "lng": 72.85874,
            "persons": 2,
            "reviewsCount": 3,
            "rating": 4.67,
            "type": "Entire rental unit",
            "userId": 88871192,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                8,
                137,
                11,
                139,
                77,
                85,
                86,
                23,
                89,
                665,
                91,
                93,
                94,
                671,
                33,
                39,
                40,
                104,
                41,
                236,
                45,
                51,
                55,
                61
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 4121,
                "currency": "INR",
                "total": 32965,
                "priceItems": [
                    {
                        "title": "₹3,999 x 8 nights",
                        "amount": 31992
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 6398
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 4300
                    },
                    {
                        "title": "Taxes",
                        "amount": 3071
                    }
                ]
            }
        },
        {
            "id": "919289803054478236",
            "url": "https://www.airbnb.com/rooms/919289803054478236",
            "deeplink": "https://www.airbnb.com/rooms/919289803054478236?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 24,
            "name": "Luxurious suite for 2 near Mumbai Airport- Andheri",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-919289803054478236/original/be66175b-2b81-410c-b72b-4b421ba6cb02.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-919289803054478236/original/f92d3047-3d66-4d30-808b-a25ce6828eb7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-919289803054478236/original/3c0e0b40-1384-4b03-b3a4-0f0ff32d5797.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-919289803054478236/original/812cbf74-1e8a-449d-9ff1-1cd030fa0a97.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-919289803054478236/original/823cf453-f22d-4e7f-b131-795d434d5f58.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/4c1d684f-e965-4ebd-81d6-b0b141c24439.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.100817457867226,
            "lng": 72.88039817672119,
            "persons": 2,
            "reviewsCount": 10,
            "rating": 4.3,
            "type": "Private room in guesthouse",
            "userId": 409577804,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                35,
                4,
                5,
                37,
                39,
                8,
                9,
                47,
                287
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 3180,
                "currency": "INR",
                "total": 25438,
                "priceItems": [
                    {
                        "title": "₹2,450 x 8 nights",
                        "amount": 19600
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 150
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 3318
                    },
                    {
                        "title": "Taxes",
                        "amount": 2370
                    }
                ]
            }
        },
        {
            "id": "844063730255570973",
            "url": "https://www.airbnb.com/rooms/844063730255570973",
            "deeplink": "https://www.airbnb.com/rooms/844063730255570973?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 25,
            "name": "A comfy crash pad",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-844063730255570973/original/4dbcf1db-a757-4f1e-8e70-4d3db6b9e224.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-844063730255570973/original/583977a5-687c-479b-a9c7-c6df4c069f36.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-844063730255570973/original/38627788-5d90-4a54-85cf-9ffc98908a3b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-844063730255570973/original/160866e2-4fee-4e1b-aa6b-75c033bbbcba.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-844063730255570973/original/9ba08891-2b3c-4d7e-b2d3-edd4f643bed0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-844063730255570973/original/e44b5a63-81ca-404a-be69-803c6ae8601c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-844063730255570973/original/a1bc93d2-b826-424b-875f-ae980b7138cd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-844063730255570973/original/5492d5d0-97ce-4b8d-86e6-d27a8b23e155.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-504733767/original/3ae3a4b5-ad74-4c1c-ae6c-1137af9354c8.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.169064496457697,
            "lng": 72.8693736673313,
            "persons": 2,
            "reviewsCount": 2,
            "type": "Entire condo",
            "userId": 504733767,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                129,
                67,
                4,
                5,
                73,
                394,
                139,
                77,
                79,
                146,
                85,
                86,
                23,
                665,
                91,
                671,
                33,
                34,
                37,
                39,
                40,
                104,
                41,
                107,
                44,
                47
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 3721,
                "currency": "INR",
                "total": 29768,
                "priceItems": [
                    {
                        "title": "₹3,210 x 8 nights",
                        "amount": 25680
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 2568
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 3883
                    },
                    {
                        "title": "Taxes",
                        "amount": 2773
                    }
                ]
            }
        },
        {
            "id": "836966289969606071",
            "url": "https://www.airbnb.com/rooms/836966289969606071",
            "deeplink": "https://www.airbnb.com/rooms/836966289969606071?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 26,
            "name": "1 BHK in Hiranandani Powai (F)",
            "bathrooms": 2,
            "bedrooms": 1,
            "beds": 2,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/d7161c66-7ac0-4d98-aa60-52248a352eea.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c6bdbf5b-2b27-4338-a6b4-cdf53c233f20.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9b5afcbf-d28c-4b22-86a5-02e599c1e6f3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/247315ba-b9e9-4144-af2f-f3417d19b951.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6343dd6b-5b36-4d52-80f0-57a3de36d105.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/79772d23-4ad6-4a4c-8217-209b5eaa59ca.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ba54d044-0a38-434c-ad4f-1c3cacc22e0b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6f5a15a6-ed41-4877-b179-78eba6c0d63e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f27bcc4c-e94c-4fdc-b4f4-bf8f2ae178e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2bad383a-9929-4c99-aeb7-abf4027b88df.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/43d0b0d2-8b2d-43a2-a1dc-70915e2029ec.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b2c0d9be-5456-498e-8965-551d41d1662f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0adbb3ce-e393-4b1e-a834-861c17377faf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a5d0ed77-04d6-4f84-950c-0177036d1e36.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5c084e2c-bba0-45fd-bee2-68c2a614131d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2f3c109b-110c-4c3b-bf8e-9679329b63a6.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-39906416/original/e85d5d98-d89a-4fea-8bf2-66b21ac0c8f5.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": true,
            "lat": 19.114441995143345,
            "lng": 72.90936179459095,
            "persons": 4,
            "reviewsCount": 18,
            "rating": 4.83,
            "type": "Entire rental unit",
            "userId": 39906416,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                7,
                8,
                9,
                137,
                139,
                12,
                21,
                663,
                665,
                667,
                30,
                671,
                33,
                34,
                35,
                37,
                39,
                167,
                40,
                41,
                44,
                45,
                46,
                47,
                51,
                179,
                308,
                54,
                57,
                185,
                71,
                72,
                73,
                77,
                79,
                85,
                86,
                89,
                91,
                93,
                94,
                95,
                96,
                97,
                99,
                611,
                101,
                103,
                104,
                107,
                510
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 6046,
                "currency": "INR",
                "total": 48368,
                "priceItems": [
                    {
                        "title": "₹5,998 x 8 nights",
                        "amount": 47984
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 4798
                    },
                    {
                        "title": "Taxes",
                        "amount": 5182
                    }
                ]
            }
        },
        {
            "id": "903593932476241561",
            "url": "https://www.airbnb.com/rooms/903593932476241561",
            "deeplink": "https://www.airbnb.com/rooms/903593932476241561?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 27,
            "name": "Dream a little Dream 1 Bhk Regent Hills Powai",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/f903d77b-2535-4566-8d5a-079fec905d5a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/66ab5c44-a35c-4b22-910e-5c2905b8bab6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/63b635dc-7bcf-4af5-b7c5-d28762df5951.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/4176d76d-6340-41c4-ad8a-4458e8f53155.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/823d0d03-ff15-4e14-bca7-f1742e541b15.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/5f6cd7cb-ecb9-472f-9e6d-c166b1769f42.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/b22a48ed-a9ec-46fc-891e-f38b1459519b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/0e1f7f10-58d5-42e0-8d38-7e46f279fd8a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/607e54d6-893e-4ded-ba3c-504dd5a48ff2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/e1d52a0d-674f-4400-a43a-0791f752ab7f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-779624871791587754/original/66c6c4a4-9fa2-41bb-8a3f-c802151b9c4d.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-779624871791587754/original/4d4633a6-d081-493f-bf3a-1ca5911cbab0.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/faae2af5-976b-46d1-a238-9f26ebcc1d7b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/2bc24b08-4d25-4df2-9488-d3410557516a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/ea10acd0-4269-4783-b9af-8253082562e3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/6bdd411a-eec5-4f8f-93fd-20ff7b792128.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/8e37f959-8cfb-4440-9636-4ac7357156a9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-903593932476241561/original/053b726d-cd92-4353-a883-3d38a92ae31f.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-107100608/original/d4d86238-1295-4ce9-825d-a7c92e804f2d.png?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": true,
            "lat": 19.115236039397722,
            "lng": 72.91298353195268,
            "persons": 4,
            "reviewsCount": 8,
            "rating": 4.88,
            "type": "Entire condo",
            "userId": 107100608,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                64,
                1,
                4,
                5,
                8,
                9,
                73,
                137,
                139,
                77,
                79,
                145,
                21,
                85,
                86,
                89,
                665,
                91,
                667,
                93,
                94,
                415,
                671,
                96,
                33,
                97,
                35,
                611,
                37,
                39,
                40,
                104,
                41,
                107,
                44,
                236,
                45,
                46,
                47,
                51,
                54,
                57,
                251
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 6719,
                "currency": "INR",
                "total": 53751,
                "priceItems": [
                    {
                        "title": "₹5,999 x 8 nights",
                        "amount": 47992
                    },
                    {
                        "title": "Taxes",
                        "amount": 5759
                    }
                ]
            }
        },
        {
            "id": "744869245371720310",
            "url": "https://www.airbnb.com/rooms/744869245371720310",
            "deeplink": "https://www.airbnb.com/rooms/744869245371720310?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 28,
            "name": "HS1-  premium city view room",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/8f18bf15-f0cf-4c16-ae2e-d0a4f48206ef.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b1f67054-7646-4489-927e-10ce6154e628.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3a91b9fb-4e7a-4ac8-b372-304dfe923fe0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3e4040d0-9d4f-4813-a54b-0145aca954d1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/12fe490f-cb19-490c-a4ee-e364aeff7b68.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/57a45ec3-5fe5-4c3b-8aeb-ffb0edf6935f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0ff55aad-3ffe-4ebf-8f1c-ac32cded8554.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/56fb7122-1392-4b63-9760-8043ab35f438.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d0834ecb-3929-4e9c-a749-f3a6413960fa.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b0267d8a-3719-4878-ad28-8ecc0d76faa4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a0ff345b-82fb-468c-9e80-f0d24d7b97af.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a83d8f21-98b1-463d-bd31-1f041a06f05e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bf92350a-f9a0-4c39-a16c-67410a84d172.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7f2d64eb-dd81-4721-bee3-176a4293e49a.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.12488,
            "lng": 72.8298,
            "persons": 2,
            "reviewsCount": 24,
            "rating": 4.75,
            "type": "Private room in condo",
            "userId": 301406671,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                73,
                11,
                139,
                77,
                79,
                665,
                90,
                91,
                93,
                94,
                671,
                33,
                34,
                100,
                40,
                42,
                44,
                45,
                46,
                47,
                179
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 5039,
                "currency": "INR",
                "total": 40311,
                "priceItems": [
                    {
                        "title": "₹4,499 x 8 nights",
                        "amount": 35992
                    },
                    {
                        "title": "Taxes",
                        "amount": 4319
                    }
                ]
            }
        },
        {
            "id": "820051805130854681",
            "url": "https://www.airbnb.com/rooms/820051805130854681",
            "deeplink": "https://www.airbnb.com/rooms/820051805130854681?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 29,
            "name": "Kakad Classic.",
            "bathrooms": 2,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/392a9646-7c5d-4667-8873-82625ec5a12f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/311df736-0bef-4ea0-9bd3-bdba5cf2ceb5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ce2bf780-bfaa-43b1-9ce8-6eabb4a930d0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/15a1676e-7efc-40b0-9b32-e0f93a685d25.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/eada7afa-08b2-42da-856b-1c1cecc38eb4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7201e91b-f29f-49f8-bf43-43a8cab3ae87.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f632026f-b54e-4e6f-9bb8-d9cac028a1d8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/255167aa-3f9d-4315-9ae8-0b38f1dc6e8b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e79b9007-f140-45cf-a3bb-c933379b707c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/829ca09b-c7ab-4e25-9b77-e00085b0e972.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/cb4ed84a-1e06-4a75-acc6-d1e232cad542.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/926671fe-399c-4cd7-8562-779ce0576ed3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e6d40c7c-9fa9-45d8-865b-42530b457914.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5e8a4c09-5e81-44ae-bca5-7d53fac8428c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9b80729c-4dc0-4cc7-9c44-41d47e5cfc0e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1fbabecb-a651-4f91-86ee-ed2568861df4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/48a05260-75ef-488f-9a77-84f9ee387027.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a2c1cc77-0951-4d4c-8267-eb71604e3f58.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.06477,
            "lng": 72.83193,
            "persons": 1,
            "reviewsCount": 10,
            "rating": 4.8,
            "type": "Private room in rental unit",
            "userId": 489395656,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                9,
                73,
                137,
                139,
                77,
                15,
                79,
                85,
                91,
                667,
                93,
                287,
                415,
                671,
                672,
                33,
                674,
                227,
                611,
                37,
                39,
                103,
                40,
                41,
                42,
                107,
                44,
                236,
                45,
                46,
                47,
                308,
                61
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 3881,
                "currency": "INR",
                "total": 31041,
                "priceItems": [
                    {
                        "title": "₹3,000 x 8 nights",
                        "amount": 24000
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 100
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 4049
                    },
                    {
                        "title": "Taxes",
                        "amount": 2892
                    }
                ]
            }
        },
        {
            "id": "1004118707673177549",
            "url": "https://www.airbnb.com/rooms/1004118707673177549",
            "deeplink": "https://www.airbnb.com/rooms/1004118707673177549?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 30,
            "name": "Sam's Place BnB- AC & Wi-Fi",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/84d064ad-da78-4b74-be18-26af833c89a0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/2eb11289-a820-4f99-9352-a643bba1e9c0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/4ab25fbe-2b8c-40ed-86a8-938ec2a48d86.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/350e0583-31a0-40c3-a435-7ea87e0a1a71.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/59d2bae3-385f-4ade-aa09-2ac7b6e66f9d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/ddf1eaa4-749a-44ee-acbe-318279c44046.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/e414ef17-ee72-4661-a93f-20a742ba8325.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/37a97b4b-3fdf-492e-9f0d-f481c9d6c7e7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/5f3661d3-c672-4dcd-be62-38a69ffd402e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/a39935a9-fd04-467f-a145-654d71ddb8b9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/b8e36296-dbe1-4cb7-9445-a73b71f27ad5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/d14fcdcb-6a62-49ed-a887-7e46c0044b09.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1004118707673177549/original/0c1dbf13-ff32-4f5e-a7f7-283aa91483a2.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/1015b326-5939-400e-b81d-5879d92793c8.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.07686,
            "lng": 72.82307,
            "persons": 4,
            "reviewsCount": 0,
            "type": "Entire condo",
            "userId": 237607989,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                96,
                4,
                5,
                8,
                91,
                139
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 2787,
                "currency": "INR",
                "total": 22295,
                "priceItems": [
                    {
                        "title": "₹2,650 x 8 nights",
                        "amount": 21200
                    },
                    {
                        "title": "Special offer",
                        "amount": 4240
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 350
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 2908
                    },
                    {
                        "title": "Taxes",
                        "amount": 2077
                    }
                ]
            }
        },
        {
            "id": "607681805844380512",
            "url": "https://www.airbnb.com/rooms/607681805844380512",
            "deeplink": "https://www.airbnb.com/rooms/607681805844380512?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 31,
            "name": "*Lovely 2 bedroom flat with Patio*Parking*Bandra",
            "bathrooms": 2,
            "bedrooms": 2,
            "beds": 2,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/56f7f541-5b43-43f1-ae50-31350ca40784.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/eb9a626d-4c0c-4660-b9b4-21da19bc61b5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/2691d2fa-ea16-47b9-840d-fd0d1633fab5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/35bdaeb4-e2e7-4e05-8332-f7389ccd080f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/978627c4-857d-4913-a447-f24698c08630.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/e77cdba7-8fbd-467a-ae86-83f17549e631.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/d89a05fa-d0d0-4e80-bd12-09bf92d307fd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/a8051296-dec3-470f-a049-f213ceca226a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/896fceee-cb1c-4461-8d82-d1e4ad031920.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/c89049b2-d828-4183-b24f-f6769230cec9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/069c0a9f-e647-4b13-b088-800987c28fec.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/6497262a-629a-48c5-b814-0b8e961a5c1a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/a3983416-302c-4d5a-aae4-32b485caf80f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/f2b57d6b-0291-4209-a1aa-eabcf1b10a3d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/d91dcee9-8eef-4800-90bc-41791d546581.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/2fcf45b9-90f3-43b7-a2c0-45ccae7e3c93.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/bca9b169-e86d-4261-97c5-9c28e8f9dafb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/9a12590e-9020-4e86-b76e-043809a27b61.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/771ff327-ec4a-48d1-96f5-47ef677dd81e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/3c0bd7de-6038-4d24-887b-82736407a495.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/357b26a9-02ff-42f0-9443-2832ec46a814.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/ddcfd2c4-e389-4013-9cfc-cfec39c0b163.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/a0f17a08-ec87-49cf-93d1-6c8b12221fe4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/931339a7-19e2-41d2-98a2-2bb38d919fe1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/10d3dffa-c31f-4a61-a6c3-77b2992ec18e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/811e5126-aab1-49ad-a3dc-cffec3203a42.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/4d0a01be-461e-4ae1-a39a-1d6324e8bac2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/8878bf92-8bd8-4913-b9f7-d81ef1460a50.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/57fdb8fc-5aa5-4174-b8c3-bc8534750965.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607681805844380512/original/30eb398a-2d37-4348-8fa7-648bcf99e417.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/69ffac85-2f94-4607-9989-e7110341bd6c.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": true,
            "lat": 19.06567,
            "lng": 72.82383,
            "persons": 6,
            "reviewsCount": 30,
            "rating": 4.67,
            "type": "Entire rental unit",
            "userId": 23039,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                132,
                5,
                8,
                9,
                73,
                137,
                11,
                139,
                12,
                77,
                79,
                211,
                21,
                85,
                86,
                89,
                665,
                91,
                667,
                93,
                94,
                671,
                96,
                33,
                35,
                611,
                37,
                39,
                40,
                104,
                41,
                44,
                236,
                45,
                46,
                47,
                51,
                54,
                251,
                61,
                510
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 12787,
                "currency": "INR",
                "total": 102288,
                "priceItems": [
                    {
                        "title": "₹9,721 x 8 nights",
                        "amount": 77770
                    },
                    {
                        "title": "Long stay discount",
                        "amount": 3889
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 2000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 12748
                    },
                    {
                        "title": "Taxes",
                        "amount": 13659
                    }
                ]
            }
        },
        {
            "id": "727854131779268173",
            "url": "https://www.airbnb.com/rooms/727854131779268173",
            "deeplink": "https://www.airbnb.com/rooms/727854131779268173?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 32,
            "name": "Robin",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/78ae3e29-b0e3-4417-ac88-6088be27a42e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/e29a9e09-3465-451f-9612-420cd29124b2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/635cd343-0d46-4974-9c05-96d40e88103c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/3c5e30fe-4d64-4508-8877-2b8a6be0d2c4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/d85ea72f-fb0a-4507-9330-b34fa7a19cb9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/9e295cdb-b63c-429c-83a3-3982d7f7de0a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/96eb45d5-deac-4762-a7fc-24f73d156238.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/b02bbb7a-669c-44cf-8bd6-4000e80647af.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/093563d1-e5e3-40e4-ae34-a0a9d52e71f4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/d78f1fde-7df6-4a8f-8a48-ecd3e4df660f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/2f37895b-c2e2-45c9-9d53-cc74760b85d6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/202397a4-80fc-4af5-9263-4c569cfbc18b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/acb609a5-7438-482e-98f6-61a617e15207.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/33228d81-b783-4a47-9a7a-b9744f43561f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/ae4211a9-4670-4461-9240-6045c7b89e84.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/1a2bb7fd-028a-477f-8ec6-5c2ff7d39899.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/43c674a5-700d-43e4-a442-83657c6c9638.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/fb514952-1c31-4988-b7d4-a8a469eb6a3c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/93bd7530-d184-4b5d-9577-da7a27341bae.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/55ffdb27-80b4-484a-8090-38fff90bcccd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/75b7ac12-e404-4f88-9e37-fddd3b8098da.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/ce2f5271-4669-4360-bfa9-db0c83781adc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/582d0d45-869d-4681-99d9-0d8da49c67da.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/ee3b532d-a97e-47dd-88f4-eeba27574557.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/f3b24399-1658-48de-8c1d-1d51d0952b6f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-727854131779268173/original/707fb8e3-e6ea-4d77-af06-402d136febe6.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/30c67db6-fd42-45e8-a7bb-43d207c8d75e.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.055416839515438,
            "lng": 72.82454523505709,
            "persons": 2,
            "reviewsCount": 42,
            "rating": 4.31,
            "type": "Entire serviced apartment",
            "userId": 463005477,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                672,
                1,
                611,
                4,
                5,
                8,
                41,
                137,
                139,
                44,
                45,
                77,
                46,
                79,
                51,
                54,
                89,
                91,
                93,
                94,
                671
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 3898,
                "currency": "INR",
                "total": 31181,
                "priceItems": [
                    {
                        "title": "₹3,480 x 8 nights",
                        "amount": 27840
                    },
                    {
                        "title": "Taxes",
                        "amount": 3341
                    }
                ]
            }
        },
        {
            "id": "983705087312108418",
            "url": "https://www.airbnb.com/rooms/983705087312108418",
            "deeplink": "https://www.airbnb.com/rooms/983705087312108418?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 33,
            "name": "*Old Warm Charm* 2 bedrooms* Near Sea*Khar West*",
            "bathrooms": 2,
            "bedrooms": 2,
            "beds": 3,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/3b3486e3-a1ec-42b1-8de5-bb9f09446929.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e75806eb-3a85-4b22-8cf8-fbfc2148f3cd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/75dbddac-218c-4a1e-9b0f-cc52f1e52a74.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bb3d0f7f-5706-4ed4-8909-224e6cb48735.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/93d26509-ef9d-4c0b-becb-6bba7001aa97.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/66a6517b-4e17-4fd4-82d7-ee81e2b8ab5b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d152da97-7980-4caf-a42a-7c72edd781fd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e8dbe2a8-2781-4a95-a252-c004b739b509.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e2b0b6e4-cbaa-4bfb-92c5-6f452e01300e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/24f1ffae-6281-4069-a108-5c8ffc12c5d0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8bd7bd83-76de-4024-ab3f-fa4f6581a170.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/341e17ea-48f7-44cb-9a97-a82a0cbe6398.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7e6368d2-6bb5-49a4-a35e-a7a07b0abe21.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5ba66f4b-0c1a-4683-b36f-965e8c1ca9ca.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/328e5548-d9b4-4a7f-b1e8-22b8e1efe059.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a6057a91-9769-4c26-93ce-e9007cd0e753.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/918e7d1c-3978-4386-b68e-0c73182634b9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0006ce82-f4dd-4f8f-a855-34bb89d70697.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a0549933-17cd-4d65-9181-9d4e3bf22ac4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4a8b087c-4f9f-4369-a120-7f2c97d241e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dc2814fe-5993-40eb-9044-a1e75b12c79f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/834127a8-a6d3-42ca-8ed9-747eaa147727.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f719d77d-07b1-4c12-976a-8a8b236c83c5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/06524766-f6d9-400d-8454-c223c2f17ac7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b458d460-2747-436e-bc8d-d167eb1db454.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/371f17fe-231d-4cd2-bb5f-e41d6f8b3c4f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2aaf9ab7-c176-4c91-855d-cbca365dfa4e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dea98695-4e57-4fe6-99e3-a49654bed943.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/69ffac85-2f94-4607-9989-e7110341bd6c.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.072951047664866,
            "lng": 72.82694963487697,
            "persons": 6,
            "reviewsCount": 1,
            "type": "Entire rental unit",
            "userId": 23039,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                33,
                4,
                100,
                5,
                8,
                11,
                12,
                45,
                46,
                47,
                51,
                54,
                23,
                91,
                93,
                94
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 10173,
                "currency": "INR",
                "total": 81382,
                "priceItems": [
                    {
                        "title": "₹7,500 x 8 nights",
                        "amount": 60000
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 4200
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 2000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 9710
                    },
                    {
                        "title": "Taxes",
                        "amount": 13872
                    }
                ]
            }
        },
        {
            "id": "788011072149986574",
            "url": "https://www.airbnb.com/rooms/788011072149986574",
            "deeplink": "https://www.airbnb.com/rooms/788011072149986574?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 34,
            "name": "Zoe",
            "bathrooms": 2,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/9285483b-ed98-47e5-a560-e92fd99fde02.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/8543d692-9633-4869-958f-5a9ecb9cc6ce.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/2277f7e3-6fa3-47e9-9654-24379148e623.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/ede0867d-16e7-4cfa-bd65-dbd21169788d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/839f479e-5f85-464d-a2e2-b47cacc2d423.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/73e43bee-04f7-4fb9-b940-fd0a31bb834e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/b667c539-f0d7-4269-8350-4c6c083acb0b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/3a598d08-7575-4a87-a4ee-3ed2ecd64e74.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/223a195e-fd88-46e1-93a2-516fd10885e7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/bffd5a4f-b020-4962-80b5-d4bad52b4fa1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/3f6dd59e-5aae-4a90-8ec2-380ea7826f16.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/e26a0fa6-a0d8-4b70-a1a1-4d26709adab5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/2d33502b-34d0-412c-9427-24b4c3346522.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/6430d90d-8d07-49d8-8d95-9d3bcea6a118.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/6c18166c-402d-4ad9-bf6f-581aa3723322.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/97e99212-8637-4e73-bfd5-26931124ff62.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/71f7fb6f-22c5-4305-ac96-8369e563f2b4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/a4780516-647a-44e0-87eb-e473dab46473.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/2f28e4f1-6fb6-4b0f-8a91-2bafdd41b41f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/a0cce4e2-f303-4afe-b468-118f8755d320.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/7ce605b1-dbd7-4137-895e-1801d09a3b61.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/21333a68-de7d-4ad0-bbf9-5a6111b143da.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/0097be15-92c0-4402-b0fe-6276e80f0dd2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/b50ae5fb-83da-4e7a-b21d-037a53bee5bd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/ab00d9fc-6fab-40c6-ad8d-1c62d820411f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/da4b768d-3bb7-46ff-8d9d-2df7553501a7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/3c503ef2-deeb-4a39-9f93-6c2dcad717f1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/d9d53d93-bc7a-4fd2-be89-f8697cffa31e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/581d619f-e87b-4bbc-a907-a786dfd776e2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-788011072149986574/original/f98c93c3-bfed-4a69-907f-456126bcba84.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5e966bfc-41c9-467b-9d65-765c4337ac83.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.05495,
            "lng": 72.83553,
            "persons": 2,
            "reviewsCount": 14,
            "rating": 4.29,
            "type": "Entire rental unit",
            "userId": 168930623,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                4,
                5,
                8,
                137,
                139,
                77,
                145,
                89,
                91,
                667,
                93,
                94,
                415,
                671,
                96,
                672,
                33,
                35,
                611,
                40,
                104,
                41,
                44,
                236,
                45,
                46,
                47,
                51,
                54,
                57,
                251
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 6043,
                "currency": "INR",
                "total": 48344,
                "priceItems": [
                    {
                        "title": "₹5,333 x 8 nights",
                        "amount": 42664
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 500
                    },
                    {
                        "title": "Taxes",
                        "amount": 5180
                    }
                ]
            }
        },
        {
            "id": "650616312176923698",
            "url": "https://www.airbnb.com/rooms/650616312176923698",
            "deeplink": "https://www.airbnb.com/rooms/650616312176923698?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 35,
            "name": "Wlcm to Bedroom with attach washroom above 20th Fl",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/975abe77-c953-4936-8a79-dee2ab4b827c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/c2ce6dc9-d810-48ef-b779-d780489f21b2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/87e6d8e1-6379-4d73-b013-3fd2fcf8d3b4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/70c4ee0b-1aee-4fe1-9fe3-e152ffbc4bd1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/225b426f-c170-4feb-bb10-8a7ce5e3ecf0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/a0192d1b-405f-4155-ae0d-237754e1418f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/ed55b866-b932-4266-820f-67601677bdfc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/9f058a96-6be3-49c3-a48b-1e3f86e821a8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/73a5be86-f900-444e-b607-1aa6faa33573.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/03b6d34e-e984-4e40-beeb-fd9227b67723.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/2970a3bf-1660-4eb1-9d09-8fc4d9a03ff8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/44ae8b48-5ebe-49ef-bdee-f3eee8bc82a3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/38bba02b-82f5-4a7c-98c1-18ba4d80c4fc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/6772e6e9-2c41-48e1-9510-14e6e8b8d525.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/f7e577ea-48f2-43c2-bbc6-8648b64d79ec.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/26d083ee-042b-47a3-a7b8-366da9092cea.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/cee3bedb-25c4-4a7d-8508-f35df8e76af0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/1f8c44ba-66ca-479a-a831-41fb8044a9db.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/f9966a07-77e3-4b0c-a2c1-563c967a3f2a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-650616312176923698/original/ffe8ed08-f502-4c9d-a012-1809d850a781.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/69fa5b27-6a88-4c17-b50e-0fac57b2d5a2.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/8120feac-7ec9-4aec-9b9b-48133d572778.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.1384854,
            "lng": 72.8267177,
            "persons": 2,
            "reviewsCount": 41,
            "rating": 4.98,
            "type": "Private room in condo",
            "userId": 283909908,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                67,
                4,
                5,
                394,
                139,
                77,
                79,
                528,
                145,
                657,
                210,
                85,
                86,
                89,
                665,
                91,
                93,
                94,
                95,
                671,
                96,
                33,
                674,
                611,
                103,
                167,
                40,
                104,
                41,
                42,
                107,
                44,
                46,
                308,
                61
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 3126,
                "currency": "INR",
                "total": 25002,
                "priceItems": [
                    {
                        "title": "₹2,450 x 8 nights",
                        "amount": 19600
                    },
                    {
                        "title": "Weekly stay discount",
                        "amount": 588
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 400
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 3261
                    },
                    {
                        "title": "Taxes",
                        "amount": 2329
                    }
                ]
            }
        },
        {
            "id": "607873359593523891",
            "url": "https://www.airbnb.com/rooms/607873359593523891",
            "deeplink": "https://www.airbnb.com/rooms/607873359593523891?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 36,
            "name": "ROOM 5 - Quiet Bandra 2 bedroom",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/db59efca-b989-4597-b43a-f4d6c07a8920.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/37d5df97-7a67-4918-9116-2de3a9644376.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/88be211d-c9a4-4556-a999-a0a1155ee2f2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/ba6377db-27d0-4a9f-ad98-f26759579969.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/a58db426-38dd-4c68-9015-41fabd684770.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/484f0018-3764-4dda-88b2-38bb649ffd9e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/a46d4750-3519-4f5d-b8c7-741657a60478.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/da30bd36-ca1a-43a9-a266-58d77a119e06.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/7cd003fd-78ea-42fa-9c75-115fe1e2c6c9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/48dedcf0-0970-4d07-b320-b955ea97dd59.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/58b72e13-aac4-488c-a82a-295475410507.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/25bb13f6-2460-47c4-bec1-84d674f93144.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/caf6a84c-3df3-4669-807c-48dac747b358.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/1372f0ff-d093-42ff-aa6a-d472de17b267.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/f18842ae-3c28-4bb3-9a41-b84df05b1784.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/70dc1593-74d5-4681-ac20-ec34607f7b08.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/6a53e702-749e-4fae-aafa-9ef5769da8e7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-607873359593523891/original/1a6f7d66-f701-4f5b-a82a-1428576c7aab.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/69ffac85-2f94-4607-9989-e7110341bd6c.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 19.06502,
            "lng": 72.82558,
            "persons": 2,
            "reviewsCount": 4,
            "rating": 5,
            "type": "Private room in rental unit",
            "userId": 23039,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                1,
                33,
                674,
                4,
                5,
                8,
                42,
                236,
                45,
                46,
                47,
                51,
                54,
                94,
                510
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 4422,
                "currency": "INR",
                "total": 35371,
                "priceItems": [
                    {
                        "title": "₹3,308 x 8 nights",
                        "amount": 26462
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 1000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 4614
                    },
                    {
                        "title": "Taxes",
                        "amount": 3295
                    }
                ]
            }
        },
        {
            "id": "853369945252713842",
            "url": "https://www.airbnb.com/rooms/853369945252713842",
            "deeplink": "https://www.airbnb.com/rooms/853369945252713842?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 37,
            "name": "Bombay Basti #3 | Khar| Bandra",
            "bathrooms": 2,
            "bedrooms": 2,
            "beds": 2,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/fa85038b-34e6-4d5d-8ef6-54337c982d9e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a7e85faa-4627-4bb8-9511-5c86fd8f9585.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/42db708d-66f1-414b-9742-d3f808ce52f5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/65e9c237-ceb5-4cd7-b4b1-0ad72c12e809.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e7a78808-c6cc-4212-a61f-11fb561d9f5b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/90a83dd6-717f-474c-b810-b8e001392504.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/c09958f4-c76b-446a-bfb4-23ec0e942114.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/ed398f59-774a-46dc-bcec-6758d1556a81.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/87cb7952-9880-4b19-a6ca-d85de6bfe880.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/978bdffd-7a7d-4b12-b567-37135dd25a92.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/64641004-129b-47ba-ad0d-0569ec62b8df.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/c7d03291-8b28-411f-9623-22c0fa2ac660.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3c9f6814-910d-454b-907e-f3f754a9b02a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ea7b62bc-5db5-4a05-97cf-04892e4f1fc3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2dcce689-2a83-49e3-adb0-e6dd700f60af.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d3137358-eec8-46be-a008-5ca13f519eeb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/a62dd7a3-b9a5-4b33-b034-e9ff3b605546.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/502235c2-0434-499f-a85c-811a2be64a45.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/40628f9d-c24c-4651-a20e-57dc0e9630e9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/fc96a621-83c8-4ea5-8069-8a144dceeeba.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/f0a2e01a-6b27-4a33-9a22-c101024d7812.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/82fdadf1-541b-4556-bd71-5b43ff32abcc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/783586bf-7c45-4b4c-b75d-84da5c876011.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/542bc88e-aad4-48c3-b6d4-3e2b9dceea44.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/327658d1-fa17-49a8-881b-536b84932185.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/23044395-0811-42d7-baa2-bb9f73d922cf.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/44825f7d-7ca8-4617-a095-09affddd8526.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/9f6caa08-b62f-449b-b470-0ab7ea2dfa4d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/124309dc-f980-4100-a075-fb81384ea060.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-853369945252713842/original/c7a2e695-98b4-4f1e-a220-06970a1ee9d0.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/d6131153-575c-4d7f-956d-fa63735612d4.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.07214622559293,
            "lng": 72.82877046614885,
            "persons": 4,
            "reviewsCount": 33,
            "rating": 4.73,
            "type": "Entire rental unit",
            "userId": 80818343,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                64,
                1,
                33,
                4,
                100,
                5,
                8,
                12,
                47,
                51,
                179,
                54,
                91
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 11829,
                "currency": "INR",
                "total": 94630,
                "priceItems": [
                    {
                        "title": "₹8,650 x 8 nights",
                        "amount": 69200
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 1000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 11794
                    },
                    {
                        "title": "Taxes",
                        "amount": 12636
                    }
                ]
            }
        },
        {
            "id": "715606736027046231",
            "url": "https://www.airbnb.com/rooms/715606736027046231",
            "deeplink": "https://www.airbnb.com/rooms/715606736027046231?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 38,
            "name": "Mangrove Sunsets:entire apt near Lokhandwala mkt",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 2,
            "city": "andheri west",
            "images": [
                "https://a0.muscache.com/im/pictures/9de43cba-e3bb-41cb-ac6c-a5f20833924e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/473947ba-198b-4ebf-acf2-a5746a139020.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0cc1f866-b2dd-4634-b5f5-514c1ef6f743.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e5e415c8-91e3-4b72-adbc-f20e85951272.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1b46833c-0488-4445-8225-47396225bde3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f14b8fd2-4124-4565-b895-29b72b597640.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b520462a-578f-47df-8278-8200d17c3bcf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/73196713-bb3f-4ab5-9e78-03164968f761.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/08713917-d123-41af-b3b6-55b491425342.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/aaef2994-a0f9-4b6f-9665-131a1ef02d72.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c29acce6-365f-4efd-b567-dd5fe0889054.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1e30a44c-6a63-482f-9dec-bceecc06527e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5a31e257-8d3f-430c-b6ac-7f3e0fcf0d96.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5351e25a-6144-4faa-a172-4e8927c18c1e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4870950f-1d09-4b2c-8b3a-5f942aef4a38.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/19fc73de-0d12-4f7b-8c1a-7cc82cc3a75d.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.1491198,
            "lng": 72.8260105,
            "persons": 4,
            "reviewsCount": 25,
            "rating": 4.76,
            "type": "Entire condo",
            "userId": 241125669,
            "address": "andheri west, Maharashtra, India",
            "amenityIds": [
                1,
                129,
                4,
                5,
                8,
                137,
                394,
                522,
                11,
                139,
                77,
                79,
                21,
                85,
                86,
                89,
                665,
                90,
                91,
                667,
                93,
                94,
                415,
                671,
                96,
                672,
                33,
                98,
                611,
                40,
                104,
                41,
                44,
                236,
                46,
                47,
                308,
                57
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 7245,
                "currency": "INR",
                "total": 57960,
                "priceItems": [
                    {
                        "title": "₹5,500 x 8 nights",
                        "amount": 44000
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 1000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 7560
                    },
                    {
                        "title": "Taxes",
                        "amount": 5400
                    }
                ]
            }
        },
        {
            "id": "758688499980566305",
            "url": "https://www.airbnb.com/rooms/758688499980566305",
            "deeplink": "https://www.airbnb.com/rooms/758688499980566305?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 39,
            "name": "Hypestays3-beautiful room with city skyline view",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/acc33c68-1758-430d-ab84-58ebd9886b21.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6679bdbf-00f6-4162-a84c-d6938f9284fe.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a9d8c3d4-86af-4ded-81a8-f9232a392a49.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f94486d3-6150-4c23-aa83-480773cf12cc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/68fc1557-7943-4983-a5ba-c4ca5e10d5f1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f01e5a54-d277-4208-b60e-3fdc1dd8aff1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f3beecb4-04b9-46ff-9d65-b3b19eb797bc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c468d974-00fd-4841-a637-e882b14a934b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bab3119c-af8f-49da-8bde-74bc7d11b99a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/13d1f7b4-3270-4cfb-86d6-4225007d1913.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/29ba2eb4-2fb7-4ac7-a9a7-8a7b60a03534.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a881e4a5-9694-43ca-8909-7682ada1d221.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e8e77f18-826f-4e4f-9f76-31b7cb08703d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a2f6a1e6-5aca-4fec-96ec-eb7794480e1b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c5c5d245-267c-4e62-a2a3-14f76520ffcd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8dcd9aa0-8a85-494b-b1c7-6537e568c17b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/380423d3-1865-49db-aa38-d6132ef1f493.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0ee43b47-eb07-44a8-b5ff-04aead62a510.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b497409b-a77b-4ab0-b472-0feaee03f97d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5b212ebf-02ba-4edd-940e-1f85c28b775e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b1ec1341-839c-4f89-b504-761ff476c48b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a62273f0-6624-4a3e-ac68-0cd3bbf8b62e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3abe841c-fe3a-4abc-87a8-132f359f6620.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4ce49af9-71ad-4abc-a88f-a04328472a7d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9bed7a39-a467-4f82-8922-b7327e9a5f45.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/22be2709-6827-428f-affa-9ba1dd3eb122.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/423b0f4a-7cbd-4689-a3ac-2446f59e5313.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7f2d64eb-dd81-4721-bee3-176a4293e49a.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.12534,
            "lng": 72.82804,
            "persons": 2,
            "reviewsCount": 6,
            "rating": 4.5,
            "type": "Private room in condo",
            "userId": 301406671,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                33,
                4,
                5,
                8,
                9,
                45,
                46,
                94,
                47,
                287
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi",
                "Kitchen"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 4479,
                "currency": "INR",
                "total": 35831,
                "priceItems": [
                    {
                        "title": "₹3,999 x 8 nights",
                        "amount": 31992
                    },
                    {
                        "title": "Taxes",
                        "amount": 3839
                    }
                ]
            }
        },
        {
            "id": "609778325692714520",
            "url": "https://www.airbnb.com/rooms/609778325692714520",
            "deeplink": "https://www.airbnb.com/rooms/609778325692714520?check_in=2023-10-22&check_out=2023-10-30&adults=1&children=0&infants=0&pets=0",
            "position": 40,
            "name": "Sweet Home Queen Size Bed Single Occupancy",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Mumbai",
            "images": [
                "https://a0.muscache.com/im/pictures/689a4455-dfce-46f0-b4ae-76fe022ec8e3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e482b2a9-b99a-4258-b0e8-4e4146d704ae.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/08abbd29-a530-4b07-8fa1-33bb97c46a84.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/49a3e609-5eea-4a7f-a686-ea834300561d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0f8e5239-ced3-43e8-b32d-bf186645d685.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-270664876/original/1ed1d765-de11-4e96-a0d9-b3255da7c61e.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 19.11344,
            "lng": 72.82654,
            "persons": 1,
            "reviewsCount": 32,
            "rating": 4.16,
            "type": "Private room in villa",
            "userId": 270664876,
            "address": "Mumbai, Maharashtra, India",
            "amenityIds": [
                4,
                5,
                101,
                39,
                103,
                40,
                104,
                42,
                44,
                45,
                77,
                46,
                47,
                91
            ],
            "previewAmenities": [
                "Air conditioning",
                "Wifi"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 1932,
                "currency": "INR",
                "total": 15456,
                "priceItems": [
                    {
                        "title": "₹1,500 x 8 nights",
                        "amount": 12000
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 2016
                    },
                    {
                        "title": "Taxes",
                        "amount": 1440
                    }
                ]
            }
        }
    ]
};




let ind;
let out;




checkin.addEventListener("change", function(event) {
    ind=event.target.value;

});
checkout.addEventListener("change",function(event){
    out=event.target.value;
})

searchBTN.addEventListener("click",async function(){
    //call that async function
    const loc=getLoc.value;
    const ng=document.getElementById("getGuest").value;
    const ans= await fetchData(loc,ind,out,ng);

   await  attachFiles(ans);
});


async function attachFiles(res){
    const result= await res.results;
    
    noOfRes.innerText=result.length +" + properties in "+getLoc.value;
   await result.map((res)=>{
       
        createNewCard(res)});
    
}
async function createNewCard(objk){
    let newCard=document.createElement("div");
    newCard.classList="card";
    let res= await objk;
    console.log(res);
    newCard.innerHTML=`<div class="cardl"><img id="cardImg" src=${res.images[0]} alt=""></div><div class="cardr"><div><p class="cardType">${res.type}</p><h1 id="hotelName">${res.name}</h1></div><div><ul id="hotelAmenities"><li>${res.previewAmenities[0]}</li><li>${res.previewAmenities[1]}</li><li>${res.previewAmenities[2]}</li></ul></div><div class="cardrb"><div><p id="hotelRatings">${res.rating}</p><img src="./searchimg/star (2).svg" alt=""><div><p class="cardRev" id="Reviews">${ res.reviewsCount}</p><p class="cardRev">Reviews</p></div></div><p id="hotelPrice">${res.price.rate}$</p></div></div></div>`;
    
     cardHandler.append(newCard);
     console.log(newCard);
}




async function fetchData(location, startDate, endDate, noOfGuest) {
  const url =
    `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${startDate}&checkout=${endDate}&adults=${noOfGuest}&children=0&infants=0&pets=0&page=1&currency=INR`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "df765ec1bemsh0d5e9644fb85c11p16bf0djsn69bac089d648",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  
} catch (error) {
    const newele=document.createElement("div");
    newele.classList="errorClass";
    newele.innerText=error;
    myHero.append(newele);
  }
}

//YYYY-MM-DD

