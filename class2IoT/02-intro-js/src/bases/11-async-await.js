const getImage = async () => {
  try {
    const apiKey = 'evuJUBo5pZVvi85B248JdAAOWdCz3ii0';
    const peticion = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await peticion.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
