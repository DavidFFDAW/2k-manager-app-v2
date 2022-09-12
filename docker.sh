docker container rm -f angular_champions_app

docker image rm -f angular_champions

docker build -t angular_champions -q .

docker run -d -i -t -p 4200:80 --name=angular_champions_app react-plants