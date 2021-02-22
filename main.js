function socialPage() {
    html2canvas(document.querySelector("#social-app-wrapper"), {
      onrendered: function (canvas) {
        const img = canvas.toDataURL();
        $("#screenshot").attr("src", img).show();
        canvas.toBlob(function (blob) {
          saveAs(blob, "social.png");
        });
      },
      allowTaint: true,
      imageTimeout: 0,
      useCORS: true,
    });
    return false;
  }

  function profilePage() {
    html2canvas(document.querySelector("#profile-wrapper"), {
      onrendered: function (canvas) {
        const img = canvas.toDataURL();
        $("#screenshot").attr("src", img).show();
        canvas.toBlob(function (blob) {
          saveAs(blob, "profile.png");
        });
      },
      allowTaint: true,
      imageTimeout: 0,
      useCORS: true,
    });
    return false;
  }

  function eventPage() {
    html2canvas(document.querySelector("#event-wrapper"), {
      onrendered: function (canvas) {
        const img = canvas.toDataURL();
        $("#screenshot").attr("src", img).show();
        canvas.toBlob(function (blob) {
          saveAs(blob, "event.png");
        });
      },
      allowTaint: true,
      imageTimeout: 0,
      useCORS: true,
    });
    return false;
  }

  function completePage() {
    html2canvas(document.body, {
      onrendered: function (canvas) {
        const img = canvas.toDataURL();
        $("#screenshot").attr("src", img).show();

        canvas.toBlob(function (blob) {
          // if want to send image to api then send blob object.
          // to save image
          saveAs(blob, "completePage.png");
        });
      },
    });
    return false;
  }