require("dotenv").config();
const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("Document Contract with all perfect condition:", async function () {
  let firstUser, secondUser;
  let documentContract;
  let hash1, hash10, hash30, hash50;
  let baseURL;

  before(async () => {
    [firstUser, secondUser] = await ethers.getSigners();
    hash1 = ["QmRTJN6tXdNisNs1RkYfSXGGUNspWgXPJ1esEhrPbwTLCi"];
    baseURL = "https://gateway.pinata.cloud/ipfs/";
    hash10 = [
      "QmRTJN6tXdNisNs1RkYfSXGGUNspWgXPJ1esEhrPbwTLCi",
      "QmZ9W6NGB12VKrjYm8iAxKYBxD5wgSMn3TA5LNHkiGtxrQ",
      "QmVJGznLHuYwpkgMKiDXywGRAvdXk6nXJQ725PPb4Zsa9F",
      "QmNMcpAcLDQbgFawiCJ17nL6KJeLSBWPAeWKeubLnC4mbP",
      "QmV56jv89AHwvtDi5wYb4iv4Q6cZ2N52iTsFtRxVutKyun",
      "QmU2VKW7R9Bp7s9qz2mbjPkc7xs67sf53bNbGtEGW4SkW9",
      "QmeVkHaycQ9QSFnniGbXYrnMNPEDNQGAtXJ9BKJJbF4oA8",
      "QmS9Ay8qACpi1Sg1ZCi1GMy17GCzSFhDYaUwxTw77vjCVN",
      "Qmcz9LBQkciQ1YVBo1Ey8eoy5cB59TswfNNuVvvrquyQwU",
      "QmZEKnziibVWYMxSX86UhoztXxUGQF9NzuPMKJHxGarDxh",
    ];

    hash30 = [
      "QmRTJN6tXdNisNs1RkYfSXGGUNspWgXPJ1esEhrPbwTLCi",
      "QmZ9W6NGB12VKrjYm8iAxKYBxD5wgSMn3TA5LNHkiGtxrQ",
      "QmVJGznLHuYwpkgMKiDXywGRAvdXk6nXJQ725PPb4Zsa9F",
      "QmNMcpAcLDQbgFawiCJ17nL6KJeLSBWPAeWKeubLnC4mbP",
      "QmV56jv89AHwvtDi5wYb4iv4Q6cZ2N52iTsFtRxVutKyun",
      "QmU2VKW7R9Bp7s9qz2mbjPkc7xs67sf53bNbGtEGW4SkW9",
      "QmeVkHaycQ9QSFnniGbXYrnMNPEDNQGAtXJ9BKJJbF4oA8",
      "QmS9Ay8qACpi1Sg1ZCi1GMy17GCzSFhDYaUwxTw77vjCVN",
      "Qmcz9LBQkciQ1YVBo1Ey8eoy5cB59TswfNNuVvvrquyQwU",
      "QmZEKnziibVWYMxSX86UhoztXxUGQF9NzuPMKJHxGarDxh",

      "QmbD33kbHYBCGiCFsFvL514qtuNkqsbGtDgPMstRuQHXWQ",
      "QmfUiZMSxenJueAQ5Rndmz4bpzdvySkCDFTRoyzSPwG8Wb",
      "QmVrnqh8TfzUqQxmE8HSpgdNitvZWKHxkJpj3ySwKzS7F5",
      "QmS82UZascnBNngBwaFyGiAnzuMpRSNhF8NA1gzQmJGzSS",
      "QmYc8D8UsXrDHQTxdzxHEU4bV8gZw4f76iDikFUB562w92",
      "QmciAoXGDufq2FKSLnozVE85D5oahAiqwFHT19FWcDyyVD",
      "QmeswXfrwVt87Bad65mwFCHYxfLVkrATrg4qcgxBfhGJ8C",
      "QmPmsaTTxfmhjVsUGG48ZdQbsEswRjXxpUUWjzThuLpKXs",
      "Qmc1Uo7A8ARSeRQdGopxixZHxfuY8uWgwpGCnwuiRYxVwH",
      "QmQ1sMgEtgAQZLHAFgqk8fsEwBCrjNoDRXKj88LbuJ5D6Q",

      "QmNxdPVUuenimK1byZApAz7RuUJE8bueTNjiqoU7aZFEWX",
      "QmfKARyA3XzT4xRuqubAvVF7Y8vCM15jZrT5DHReLpVZNk",
      "QmfUEbxek2mdELc6an1NMYu6xKUR8r5iRdbUNGrzCtLM7G",
      "QmVxZ7EWMmGbow24TVFws6TjPvv1wPoMFxPzbfuJBSrykK",
      "QmPPrWRTNcF5idQma8qaGevXakEU36xRL1H88gUTW6dNXn",
      "QmPULHMGY5B48DBQKeAzhmkvCUR7PtSUvRRZzVLYysWG89",
      "QmebwpyUDtzUsyd8yAaWZBG7b3pCVZep16qX76uioPt5z5",
      "QmaXv6Fek3S6RVbSRhuQSSY1ZNNB4hsP3QipukwH9MiXUT",
      "QmPAKTzhtwU6x4mTc3VxzAUwc9pRCkxBv6NpQjkdpyGLQB",
      "QmUYSucfWsmzH2E17HMQWtqoqd6Xv78raMeeEBiyxy8djV",
    ];

    hash50 = [
      "QmRTJN6tXdNisNs1RkYfSXGGUNspWgXPJ1esEhrPbwTLCi",
      "QmZ9W6NGB12VKrjYm8iAxKYBxD5wgSMn3TA5LNHkiGtxrQ",
      "QmVJGznLHuYwpkgMKiDXywGRAvdXk6nXJQ725PPb4Zsa9F",
      "QmNMcpAcLDQbgFawiCJ17nL6KJeLSBWPAeWKeubLnC4mbP",
      "QmV56jv89AHwvtDi5wYb4iv4Q6cZ2N52iTsFtRxVutKyun",
      "QmU2VKW7R9Bp7s9qz2mbjPkc7xs67sf53bNbGtEGW4SkW9",
      "QmeVkHaycQ9QSFnniGbXYrnMNPEDNQGAtXJ9BKJJbF4oA8",
      "QmS9Ay8qACpi1Sg1ZCi1GMy17GCzSFhDYaUwxTw77vjCVN",
      "Qmcz9LBQkciQ1YVBo1Ey8eoy5cB59TswfNNuVvvrquyQwU",
      "QmZEKnziibVWYMxSX86UhoztXxUGQF9NzuPMKJHxGarDxh",

      "QmbD33kbHYBCGiCFsFvL514qtuNkqsbGtDgPMstRuQHXWQ",
      "QmfUiZMSxenJueAQ5Rndmz4bpzdvySkCDFTRoyzSPwG8Wb",
      "QmVrnqh8TfzUqQxmE8HSpgdNitvZWKHxkJpj3ySwKzS7F5",
      "QmS82UZascnBNngBwaFyGiAnzuMpRSNhF8NA1gzQmJGzSS",
      "QmYc8D8UsXrDHQTxdzxHEU4bV8gZw4f76iDikFUB562w92",
      "QmciAoXGDufq2FKSLnozVE85D5oahAiqwFHT19FWcDyyVD",
      "QmeswXfrwVt87Bad65mwFCHYxfLVkrATrg4qcgxBfhGJ8C",
      "QmPmsaTTxfmhjVsUGG48ZdQbsEswRjXxpUUWjzThuLpKXs",
      "Qmc1Uo7A8ARSeRQdGopxixZHxfuY8uWgwpGCnwuiRYxVwH",
      "QmQ1sMgEtgAQZLHAFgqk8fsEwBCrjNoDRXKj88LbuJ5D6Q",

      "QmNxdPVUuenimK1byZApAz7RuUJE8bueTNjiqoU7aZFEWX",
      "QmfKARyA3XzT4xRuqubAvVF7Y8vCM15jZrT5DHReLpVZNk",
      "QmfUEbxek2mdELc6an1NMYu6xKUR8r5iRdbUNGrzCtLM7G",
      "QmVxZ7EWMmGbow24TVFws6TjPvv1wPoMFxPzbfuJBSrykK",
      "QmPPrWRTNcF5idQma8qaGevXakEU36xRL1H88gUTW6dNXn",
      "QmPULHMGY5B48DBQKeAzhmkvCUR7PtSUvRRZzVLYysWG89",
      "QmebwpyUDtzUsyd8yAaWZBG7b3pCVZep16qX76uioPt5z5",
      "QmaXv6Fek3S6RVbSRhuQSSY1ZNNB4hsP3QipukwH9MiXUT",
      "QmPAKTzhtwU6x4mTc3VxzAUwc9pRCkxBv6NpQjkdpyGLQB",
      "QmUYSucfWsmzH2E17HMQWtqoqd6Xv78raMeeEBiyxy8djV",

      "QmVipi6WLpRmLcj6rw2myEz6rZH9mHhKzdM6biitCH9Cu4",
      "QmW7geuJnX6Pa4pzQSU8JYU9qbm2dVYvXEMtJhr1mcWjRi",
      "QmaL8Er6bRYSd6z1jnksm79qs4UbxVGwqwMNUwUAtMhcDp",
      "QmUZBG6Gg2aQM63uU7RAsv9dP7TVTxMa6wg34GvUykQzcR",
      "QmVPVqbhspcYCR5uKZ6CZHsWGiddmPuq9RPSDasSTBcVnn",
      "QmUEfNayaio7kUvWkQ6A5LUrRBA7ih4FDyhBQ2iZDkVEbT",
      "QmWhu5F3b6KMMHQ4bMAQHLwU5LTBazvG4SrHzyX4ouudpu",
      "QmZiodcvzJVBmLCBuDYrqX4zrUzVWPg9s3yxJZrikA1cGT",
      "QmWe39AnK67RmASPxU5NnXkrS63MfHzGrevfYTDGtuyQJp",
      "QmWeXijKdKY528qaeHguZyQ5BwgzRktAZybiQA1CR6HuZj",

      "QmbYLktU5B3ifNGbaAzJcR98frR2WD66R76795GS9rPWAK",
      "QmVcxmzZ2YjH63MyEo92p3XqKt7opqZdbWDJEpinsNat39",
      "QmecWZtGVRazHJGQuJQW1hR16bQ2xx3XgWcJjgfRi4319y",
      "QmfScxSkNqT8RG9a2V1f6bw8eTAtAm6qMCWeHjtsY3PGJY",
      "QmSTFYxjaZCRAZmHfyZwsp5NJgc5cEzSW17R4sHsBrpDKM",
      "Qmdky3q7WJLQdhek7jRrXbg7NFCKTYPaCb3g8gR6TUKfzE",
      "QmVkbeMzdKKNETSeAQKF6cxGRULmpnc67GzUME6HUksaVP",
      "Qmf27S6trAufwTfg9ASQk9nAy6KZYdWiJtiZdfXohNZQLS",
      "QmNbdeGYEC5KYMRrZwbdi22HD5BBbuQmhDzDq2gjS4777R",
      "QmZn4SgQCjgutWFNQP88aZ18CobYG3UGmQoyYf26TKihkA",
    ];
  });

  // Deploy contracts
  it("Deploying Contract: document", async function () {
    const t_document = await ethers.getContractFactory("Documents");
    documentContract = await t_document.deploy(baseURL);
    await documentContract.deployed();
    console.log("Document contract deployed at : ", documentContract.address);
  });

  //check admin
  it("checking admin: admin should be first user", async function () {
    const admin = await documentContract.owner();
    expect(admin).to.equal(firstUser.address);
  });

  // checking baseurl
  it("checking base url", async function () {
    const baseUrl = await documentContract.getBaseURL();
    expect(baseUrl).to.equal(baseURL);
  });

  // register single certificate
  it("Register single certificate and checking length , event and uri", async function () {
    const t_document = await documentContract
      .connect(firstUser)
      .registerDocument(hash1);
    const receipt = await t_document.wait();
    const events = receipt.events?.filter((x) => {
      return x.event == "Registered";
    });
    //console.log('events:',events);
    // console.log(events[0].args[0]);
    // console.log(events[0].args[1]);
    const totalCertificate =
      await documentContract.totalCertificateRegistered();
    const currentUrl = baseURL + hash1[0];

    const currentURL_c = await documentContract.getDocumentDetails([
      totalCertificate - 1,
    ]);
    expect(events.length).to.equal(1);
    expect(events[0].args[0]).to.equal(totalCertificate - 1);
    expect(events[0].args[1]).to.equal(hash1[0]);
    expect(currentURL_c[0]).to.equal(currentUrl);
  });

  // register multiple certificate certificate
  it("Register 10 certificate and checking length , event and uri", async function () {
    const startIndex = await documentContract.totalCertificateRegistered();

    const t_document = await documentContract
      .connect(firstUser)
      .registerDocument(hash10);
    const receipt = await t_document.wait();
    const events = receipt.events?.filter((x) => {
      return x.event == "Registered";
    });
    const totalDoc = await documentContract.totalCertificateRegistered();

    expect(totalDoc).to.equal(parseInt(startIndex) + parseInt(hash10.length));
    for (let i = 0; i < hash10.length; i++) {
      const currentUrl = baseURL + hash10[i];
      const currentURL_c = await documentContract.getDocumentDetails([
        startIndex - 1 + (i + 1),
      ]);
      expect(events[i].args[0]).to.equal(startIndex - 1 + (i + 1));
      expect(events[i].args[1]).to.equal(hash10[i]);
      expect(currentURL_c[0]).to.equal(currentUrl);
    }
  });

  it("Register 30 certificate and checking length , event and uri", async function () {
    const startIndex = await documentContract.totalCertificateRegistered();

    const t_document = await documentContract
      .connect(firstUser)
      .registerDocument(hash30);
    const receipt = await t_document.wait();
    const events = receipt.events?.filter((x) => {
      return x.event == "Registered";
    });
    const totalDoc = await documentContract.totalCertificateRegistered();

    expect(totalDoc).to.equal(parseInt(startIndex) + parseInt(hash30.length));
    for (let i = 0; i < hash30.length; i++) {
      const currentUrl = baseURL + hash30[i];
      const currentURL_c = await documentContract.getDocumentDetails([
        startIndex - 1 + (i + 1),
      ]);
      expect(events[i].args[0]).to.equal(startIndex - 1 + (i + 1));
      expect(events[i].args[1]).to.equal(hash30[i]);
      expect(currentURL_c[0]).to.equal(currentUrl);
    }
  });

  it("Register 50 certificate and checking length , event and uri", async function () {
    const startIndex = await documentContract.totalCertificateRegistered();

    const t_document = await documentContract
      .connect(firstUser)
      .registerDocument(hash50);
    const receipt = await t_document.wait();
    const events = receipt.events?.filter((x) => {
      return x.event == "Registered";
    });
    const totalDoc = await documentContract.totalCertificateRegistered();

    expect(totalDoc).to.equal(parseInt(startIndex) + parseInt(hash50.length));
    for (let i = 0; i < hash50.length; i++) {
      const currentUrl = baseURL + hash50[i];
      const currentURL_c = await documentContract.getDocumentDetails([
        startIndex - 1 + (i + 1),
      ]);
      expect(events[i].args[0]).to.equal(startIndex - 1 + (i + 1));
      expect(events[i].args[1]).to.equal(hash50[i]);
      expect(currentURL_c[0]).to.equal(currentUrl);
    }
  });

  it("get details of multiple document", async function () {
    const startIndex = 1;
    const stopIndex = 11;
    const docIndex = [];
    for (let i = startIndex; i < stopIndex; i++) {
      docIndex.push(i);
    }
    const currentURL_c = await documentContract.getDocumentDetails(docIndex);

    for (let i = 0; i < docIndex.length; i++) {
      const currentUrl = baseURL + hash10[i];

      expect(currentURL_c[i]).to.equal(currentUrl);
    }
  });
});

describe("Document Contract with other/unauthorised user:", async function () {
  let firstUser, secondUser;
  let documentContract;
  let hash1, hash10, hash30, hash50;
  let baseURL;
  let zeroAcc;

  before(async () => {
    [firstUser, secondUser] = await ethers.getSigners();
    hash1 = ["QmRTJN6tXdNisNs1RkYfSXGGUNspWgXPJ1esEhrPbwTLCi"];
    baseURL = "https://gateway.pinata.cloud/ipfs/";
    hash10 = [
      "QmRTJN6tXdNisNs1RkYfSXGGUNspWgXPJ1esEhrPbwTLCi",
      "QmZ9W6NGB12VKrjYm8iAxKYBxD5wgSMn3TA5LNHkiGtxrQ",
      "QmVJGznLHuYwpkgMKiDXywGRAvdXk6nXJQ725PPb4Zsa9F",
      "QmNMcpAcLDQbgFawiCJ17nL6KJeLSBWPAeWKeubLnC4mbP",
      "QmV56jv89AHwvtDi5wYb4iv4Q6cZ2N52iTsFtRxVutKyun",
      "QmU2VKW7R9Bp7s9qz2mbjPkc7xs67sf53bNbGtEGW4SkW9",
      "QmeVkHaycQ9QSFnniGbXYrnMNPEDNQGAtXJ9BKJJbF4oA8",
      "QmS9Ay8qACpi1Sg1ZCi1GMy17GCzSFhDYaUwxTw77vjCVN",
      "Qmcz9LBQkciQ1YVBo1Ey8eoy5cB59TswfNNuVvvrquyQwU",
      "QmZEKnziibVWYMxSX86UhoztXxUGQF9NzuPMKJHxGarDxh",
    ];

    hash30 = [
      "QmRTJN6tXdNisNs1RkYfSXGGUNspWgXPJ1esEhrPbwTLCi",
      "QmZ9W6NGB12VKrjYm8iAxKYBxD5wgSMn3TA5LNHkiGtxrQ",
      "QmVJGznLHuYwpkgMKiDXywGRAvdXk6nXJQ725PPb4Zsa9F",
      "QmNMcpAcLDQbgFawiCJ17nL6KJeLSBWPAeWKeubLnC4mbP",
      "QmV56jv89AHwvtDi5wYb4iv4Q6cZ2N52iTsFtRxVutKyun",
      "QmU2VKW7R9Bp7s9qz2mbjPkc7xs67sf53bNbGtEGW4SkW9",
      "QmeVkHaycQ9QSFnniGbXYrnMNPEDNQGAtXJ9BKJJbF4oA8",
      "QmS9Ay8qACpi1Sg1ZCi1GMy17GCzSFhDYaUwxTw77vjCVN",
      "Qmcz9LBQkciQ1YVBo1Ey8eoy5cB59TswfNNuVvvrquyQwU",
      "QmZEKnziibVWYMxSX86UhoztXxUGQF9NzuPMKJHxGarDxh",

      "QmbD33kbHYBCGiCFsFvL514qtuNkqsbGtDgPMstRuQHXWQ",
      "QmfUiZMSxenJueAQ5Rndmz4bpzdvySkCDFTRoyzSPwG8Wb",
      "QmVrnqh8TfzUqQxmE8HSpgdNitvZWKHxkJpj3ySwKzS7F5",
      "QmS82UZascnBNngBwaFyGiAnzuMpRSNhF8NA1gzQmJGzSS",
      "QmYc8D8UsXrDHQTxdzxHEU4bV8gZw4f76iDikFUB562w92",
      "QmciAoXGDufq2FKSLnozVE85D5oahAiqwFHT19FWcDyyVD",
      "QmeswXfrwVt87Bad65mwFCHYxfLVkrATrg4qcgxBfhGJ8C",
      "QmPmsaTTxfmhjVsUGG48ZdQbsEswRjXxpUUWjzThuLpKXs",
      "Qmc1Uo7A8ARSeRQdGopxixZHxfuY8uWgwpGCnwuiRYxVwH",
      "QmQ1sMgEtgAQZLHAFgqk8fsEwBCrjNoDRXKj88LbuJ5D6Q",

      "QmNxdPVUuenimK1byZApAz7RuUJE8bueTNjiqoU7aZFEWX",
      "QmfKARyA3XzT4xRuqubAvVF7Y8vCM15jZrT5DHReLpVZNk",
      "QmfUEbxek2mdELc6an1NMYu6xKUR8r5iRdbUNGrzCtLM7G",
      "QmVxZ7EWMmGbow24TVFws6TjPvv1wPoMFxPzbfuJBSrykK",
      "QmPPrWRTNcF5idQma8qaGevXakEU36xRL1H88gUTW6dNXn",
      "QmPULHMGY5B48DBQKeAzhmkvCUR7PtSUvRRZzVLYysWG89",
      "QmebwpyUDtzUsyd8yAaWZBG7b3pCVZep16qX76uioPt5z5",
      "QmaXv6Fek3S6RVbSRhuQSSY1ZNNB4hsP3QipukwH9MiXUT",
      "QmPAKTzhtwU6x4mTc3VxzAUwc9pRCkxBv6NpQjkdpyGLQB",
      "QmUYSucfWsmzH2E17HMQWtqoqd6Xv78raMeeEBiyxy8djV",
    ];

    hash50 = [
      "QmRTJN6tXdNisNs1RkYfSXGGUNspWgXPJ1esEhrPbwTLCi",
      "QmZ9W6NGB12VKrjYm8iAxKYBxD5wgSMn3TA5LNHkiGtxrQ",
      "QmVJGznLHuYwpkgMKiDXywGRAvdXk6nXJQ725PPb4Zsa9F",
      "QmNMcpAcLDQbgFawiCJ17nL6KJeLSBWPAeWKeubLnC4mbP",
      "QmV56jv89AHwvtDi5wYb4iv4Q6cZ2N52iTsFtRxVutKyun",
      "QmU2VKW7R9Bp7s9qz2mbjPkc7xs67sf53bNbGtEGW4SkW9",
      "QmeVkHaycQ9QSFnniGbXYrnMNPEDNQGAtXJ9BKJJbF4oA8",
      "QmS9Ay8qACpi1Sg1ZCi1GMy17GCzSFhDYaUwxTw77vjCVN",
      "Qmcz9LBQkciQ1YVBo1Ey8eoy5cB59TswfNNuVvvrquyQwU",
      "QmZEKnziibVWYMxSX86UhoztXxUGQF9NzuPMKJHxGarDxh",

      "QmbD33kbHYBCGiCFsFvL514qtuNkqsbGtDgPMstRuQHXWQ",
      "QmfUiZMSxenJueAQ5Rndmz4bpzdvySkCDFTRoyzSPwG8Wb",
      "QmVrnqh8TfzUqQxmE8HSpgdNitvZWKHxkJpj3ySwKzS7F5",
      "QmS82UZascnBNngBwaFyGiAnzuMpRSNhF8NA1gzQmJGzSS",
      "QmYc8D8UsXrDHQTxdzxHEU4bV8gZw4f76iDikFUB562w92",
      "QmciAoXGDufq2FKSLnozVE85D5oahAiqwFHT19FWcDyyVD",
      "QmeswXfrwVt87Bad65mwFCHYxfLVkrATrg4qcgxBfhGJ8C",
      "QmPmsaTTxfmhjVsUGG48ZdQbsEswRjXxpUUWjzThuLpKXs",
      "Qmc1Uo7A8ARSeRQdGopxixZHxfuY8uWgwpGCnwuiRYxVwH",
      "QmQ1sMgEtgAQZLHAFgqk8fsEwBCrjNoDRXKj88LbuJ5D6Q",

      "QmNxdPVUuenimK1byZApAz7RuUJE8bueTNjiqoU7aZFEWX",
      "QmfKARyA3XzT4xRuqubAvVF7Y8vCM15jZrT5DHReLpVZNk",
      "QmfUEbxek2mdELc6an1NMYu6xKUR8r5iRdbUNGrzCtLM7G",
      "QmVxZ7EWMmGbow24TVFws6TjPvv1wPoMFxPzbfuJBSrykK",
      "QmPPrWRTNcF5idQma8qaGevXakEU36xRL1H88gUTW6dNXn",
      "QmPULHMGY5B48DBQKeAzhmkvCUR7PtSUvRRZzVLYysWG89",
      "QmebwpyUDtzUsyd8yAaWZBG7b3pCVZep16qX76uioPt5z5",
      "QmaXv6Fek3S6RVbSRhuQSSY1ZNNB4hsP3QipukwH9MiXUT",
      "QmPAKTzhtwU6x4mTc3VxzAUwc9pRCkxBv6NpQjkdpyGLQB",
      "QmUYSucfWsmzH2E17HMQWtqoqd6Xv78raMeeEBiyxy8djV",

      "QmVipi6WLpRmLcj6rw2myEz6rZH9mHhKzdM6biitCH9Cu4",
      "QmW7geuJnX6Pa4pzQSU8JYU9qbm2dVYvXEMtJhr1mcWjRi",
      "QmaL8Er6bRYSd6z1jnksm79qs4UbxVGwqwMNUwUAtMhcDp",
      "QmUZBG6Gg2aQM63uU7RAsv9dP7TVTxMa6wg34GvUykQzcR",
      "QmVPVqbhspcYCR5uKZ6CZHsWGiddmPuq9RPSDasSTBcVnn",
      "QmUEfNayaio7kUvWkQ6A5LUrRBA7ih4FDyhBQ2iZDkVEbT",
      "QmWhu5F3b6KMMHQ4bMAQHLwU5LTBazvG4SrHzyX4ouudpu",
      "QmZiodcvzJVBmLCBuDYrqX4zrUzVWPg9s3yxJZrikA1cGT",
      "QmWe39AnK67RmASPxU5NnXkrS63MfHzGrevfYTDGtuyQJp",
      "QmWeXijKdKY528qaeHguZyQ5BwgzRktAZybiQA1CR6HuZj",

      "QmbYLktU5B3ifNGbaAzJcR98frR2WD66R76795GS9rPWAK",
      "QmVcxmzZ2YjH63MyEo92p3XqKt7opqZdbWDJEpinsNat39",
      "QmecWZtGVRazHJGQuJQW1hR16bQ2xx3XgWcJjgfRi4319y",
      "QmfScxSkNqT8RG9a2V1f6bw8eTAtAm6qMCWeHjtsY3PGJY",
      "QmSTFYxjaZCRAZmHfyZwsp5NJgc5cEzSW17R4sHsBrpDKM",
      "Qmdky3q7WJLQdhek7jRrXbg7NFCKTYPaCb3g8gR6TUKfzE",
      "QmVkbeMzdKKNETSeAQKF6cxGRULmpnc67GzUME6HUksaVP",
      "Qmf27S6trAufwTfg9ASQk9nAy6KZYdWiJtiZdfXohNZQLS",
      "QmNbdeGYEC5KYMRrZwbdi22HD5BBbuQmhDzDq2gjS4777R",
      "QmZn4SgQCjgutWFNQP88aZ18CobYG3UGmQoyYf26TKihkA",
    ];
    zeroAcc='0x0000000000000000000000000000000000000000'
  });

  // Deploy contracts
  it("Deploying Contract: document", async function () {
    const t_document = await ethers.getContractFactory("Documents");
    documentContract = await t_document.deploy(baseURL);
    await documentContract.deployed();
    console.log("Document contract deployed at : ", documentContract.address);
  });

  //check admin
  it("checking admin: admin should be first user", async function () {
    const admin = await documentContract.owner();
    expect(admin).to.equal(firstUser.address);
  });

  // checking baseurl
  it("checking base url", async function () {
    const baseUrl = await documentContract.getBaseURL();
    expect(baseUrl).to.equal(baseURL);
  });

  // register single certificate
  it("Register single certificate with unauthorised user: Not authorized", async function () {
    await expect(
      documentContract.connect(secondUser).registerDocument(hash1)
    ).to.be.revertedWith("Not authorized");
  });

  it("Register multiple certificate with unauthorised user: Not authorized", async function () {
    await expect(
      documentContract.connect(secondUser).registerDocument(hash10)
    ).to.be.revertedWith("Not authorized");
  });

  it("add authorisor from unauthorised account: Ownable: caller is not the owner", async function () {
    await expect(
      documentContract.connect(secondUser).addAuthorized(firstUser.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(
      documentContract.connect(secondUser).addAuthorized(secondUser.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("change ownership from unauthorised account: Ownable: caller is not the owner", async function () {
    await expect(
      documentContract.connect(secondUser).transferOwnership(firstUser.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(
      documentContract.connect(secondUser).transferOwnership(secondUser.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("change base URL with unauthorised user: Ownable: caller is not the owner", async function () {
    await expect(
      documentContract.connect(secondUser).changeBaseURL("https://demouri.com/")
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("add authorisor from admin account", async function () {
    const t_document = await documentContract
      .connect(firstUser)
      .addAuthorized(secondUser.address);
    const receipt = await t_document.wait();
    const isApproved = await documentContract.authorized(secondUser.address);
    expect(isApproved).to.equal(true);
  });

  it("Register single certificate and checking length , event and uri", async function () {
    const t_document = await documentContract
      .connect(secondUser)
      .registerDocument(hash1);
    const receipt = await t_document.wait();
    const events = receipt.events?.filter((x) => {
      return x.event == "Registered";
    });
    //console.log('events:',events);
    // console.log(events[0].args[0]);
    // console.log(events[0].args[1]);
    const totalCertificate =
      await documentContract.totalCertificateRegistered();
    const currentUrl = baseURL + hash1[0];

    const currentURL_c = await documentContract.getDocumentDetails([
      totalCertificate - 1,
    ]);
    expect(events.length).to.equal(1);
    expect(events[0].args[0]).to.equal(totalCertificate - 1);
    expect(events[0].args[1]).to.equal(hash1[0]);
    expect(currentURL_c[0]).to.equal(currentUrl);
  });

  // register multiple certificate certificate
  it("Register 10 certificate and checking length , event and uri", async function () {
    const startIndex = await documentContract.totalCertificateRegistered();

    const t_document = await documentContract
      .connect(secondUser)
      .registerDocument(hash10);
    const receipt = await t_document.wait();
    const events = receipt.events?.filter((x) => {
      return x.event == "Registered";
    });
    const totalDoc = await documentContract.totalCertificateRegistered();

    expect(totalDoc).to.equal(parseInt(startIndex) + parseInt(hash10.length));
    for (let i = 0; i < hash10.length; i++) {
      const currentUrl = baseURL + hash10[i];
      const currentURL_c = await documentContract.getDocumentDetails([
        startIndex - 1 + (i + 1),
      ]);
      expect(events[i].args[0]).to.equal(startIndex - 1 + (i + 1));
      expect(events[i].args[1]).to.equal(hash10[i]);
      expect(currentURL_c[0]).to.equal(currentUrl);
    }
  });

  it("change base URL with authorised user: Ownable: caller is not the owner", async function () {
    await expect(
      documentContract.connect(secondUser).changeBaseURL("https://demouri.com/")
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("change base URL with admin", async function () {
    const t_document = await documentContract
      .connect(firstUser)
      .changeBaseURL("https://demouri.com/");
    const receipt = await t_document.wait();
    const events = receipt.events?.filter((x) => {
      return x.event == "BaseURL";
    });
    expect(events[0].args[0]).to.equal("https://demouri.com/");

    const baseUrl = await documentContract.getBaseURL();
    expect(baseUrl).to.equal("https://demouri.com/");
  });

  it("change ownership from authorised account: Ownable: caller is not the owner", async function () {
    await expect(
      documentContract.connect(secondUser).transferOwnership(secondUser.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("change ownership from admin account: ", async function () {
    const t_document = await documentContract
      .connect(firstUser)
      .transferOwnership(secondUser.address);
    const receipt = await t_document.wait();
    const Owner = await documentContract.owner();
    const isUser1Owner = firstUser.address === Owner;
    const isUser2Owner = secondUser.address === Owner;
    expect(isUser1Owner).to.equal(false);
    expect(isUser2Owner).to.equal(true);
  });

  it("Giving back ownership to user 1 ", async function () {
    const t_document = await documentContract
      .connect(secondUser)
      .transferOwnership(firstUser.address);
    const receipt = await t_document.wait();
    const Owner = await documentContract.owner();
    const isUser1Owner = firstUser.address === Owner;
    const isUser2Owner = secondUser.address === Owner;
    expect(isUser1Owner).to.equal(true);
    expect(isUser2Owner).to.equal(false);
  });

  it("Removing Authorisor from non Admin Account", async function () {
 
      await expect(
        documentContract
      .connect(secondUser)
      .removeAuthorized(secondUser.address)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    
  });

  it("Removing Authorisor from Admin Account", async function () {
 
    const t_document = await documentContract
      .connect(firstUser)
      .removeAuthorized(secondUser.address);
    const receipt = await t_document.wait();
    const isAuth = await documentContract.authorized(secondUser.address);
    expect(isAuth).to.equal(false);
  
});

it("Removing Authorisor from non auth Account", async function () {
 
  await expect(
    documentContract
  .connect(secondUser)
  .removeAuthorized(secondUser.address)
  ).to.be.revertedWith("Ownable: caller is not the owner");

});

it("Re announce ownership", async function () {
 
  const t_document = await documentContract
    .connect(firstUser)
    .renounceOwnership();
  const receipt = await t_document.wait();
  const whoAdmin = await documentContract.owner();
  expect(whoAdmin).to.equal(zeroAcc);

});


});
