# Capestart Document Links

[Installation Steps](https://docs.google.com/document/d/1kcBjjft-5fayZuXwymx_wiW6CjgvYLKILt3ZDSqsaxQ/edit?usp=sharing) <br/>
[End Points](https://docs.google.com/document/d/1TKcqA4qNIOgHNeTCDWNAyv_WrnHRLo7Z6KYrJFomwUM/edit?usp=sharing) <br/>
[Implementation Plan](https://docs.google.com/document/d/15ku98IwYQ-HC6SAhITKwvS6HtcaCsnpRiDYdAkWzjUE/edit?usp=sharing) <br/>
[API Screenshots](https://docs.google.com/document/d/1pvyF8hxd4PHPj3ck4NqKKI3W0Tw9aU_LG0ibiuot_D0/edit?usp=sharing) <br/>
[Application Screenshots](https://docs.google.com/document/d/1uwOYfX2AIHHrfD6qOU9qHAnGaN6ktV7PGSBc4R8q8-E/edit?usp=sharing) <br/>
[Known Issues](https://docs.google.com/document/d/1FD2uisk3iDfrPp8AgeU6p1XQsL39_MAEJ0yg7-PhOo0/edit?usp=sharing)

# Capestart Assignment

Installation steps

1. Entering python virtual environment

```sh
Apples-MacBook-Pro:capeassignment bearly$ git clone git@github.com:mikebearly/capeassignment.git

Apples-MacBook-Pro:capeassignment bearly$ cd capeassignment

Apples-MacBook-Pro:capeassignment bearly$ pip3 install pipenv

Apples-MacBook-Pro:capeassignment bearly$ pipenv install
Warning: the environment variable LANG is not set!
We recommend setting this in ~/.profile (or equivalent) for proper expected behavior.
Creating a virtualenv for this project…
Pipfile: /Users/bearly/capeclone/capeassignment/Pipfile
Using /usr/local/bin/python3.8 (3.8.5) to create virtualenv…
⠴ Creating virtual environment...created virtual environment CPython3.8.5.final.0-64 in 884ms
  creator CPython3Posix(dest=/Users/bearly/.local/share/virtualenvs/capeassignment-ic1kKfP7, clear=False, global=False)
  seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=/Users/bearly/Library/Application Support/virtualenv)
    added seed packages: pip==20.1.1, setuptools==49.2.0, wheel==0.34.2
  activators BashActivator,CShellActivator,FishActivator,PowerShellActivator,PythonActivator,XonshActivator

✔ Successfully created virtual environment! 
Virtualenv location: /Users/bearly/.local/share/virtualenvs/capeassignment-ic1kKfP7
Installing dependencies from Pipfile.lock (b8a475)…
     ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 10/10 — 00:00:24
To activate this project's virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.

Apples-MacBook-Pro:capeassignment bearly$ pipenv shell
Launching subshell in virtual environment…
bash-3.2$  . /Users/bearly/.local/share/virtualenvs/capeassignment-ic1kKfP7/bin/activate

(capeassignment) bash-3.2$ pip install django djangorestframework
```

2. Starting Python Django server

```sh
(capeassignment) bash-3.2$cd capeassignment

(capeassignment) bash-3.2$ ls -l
total 512
-rw-r--r--    1 bearly  staff     213 Jul 29 18:29 Pipfile
-rw-r--r--    1 bearly  staff   12154 Jul 29 18:31 Pipfile.lock
-rw-r--r--    1 bearly  staff      23 Jul 30 01:09 README.md
drwxr-xr-x    9 bearly  staff     306 Jul 30 18:52 capeproject
drwxr-xr-x  412 bearly  staff   14008 Jul 30 16:36 node_modules
-rw-r--r--    1 bearly  staff  232601 Jul 30 16:33 package-lock.json
-rw-r--r--    1 bearly  staff    1063 Jul 30 16:33 package.json
-rw-r--r--    1 bearly  staff     346 Jul 30 02:53 webpack.config.js

(capeassignment) bash-3.2$ cd capeproject/
(capeassignment) bash-3.2$ ls
capeapp		capeproject	db		db.sqlite3	frontend	manage.py
(capeassignment) bash-3.2$ python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
July 31, 2020 - 13:00:05
Django version 3.0.8, using settings 'capeproject.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
[31/Jul/2020 13:00:20] "GET / HTTP/1.1" 200 1171
[31/Jul/2020 13:00:22] "GET /static/frontend/main.js HTTP/1.1" 200 2000579

```

3. Start react frontend

```sh
(capeassignment) bash-3.2$ cd capeproject/
 
(capeassignment) bash-3.2$ ls -l
total 320
drwxr-xr-x  13 bearly  staff     442 Jul 29 19:37 capeapp
drwxr-xr-x   7 bearly  staff     238 Jul 29 18:10 capeproject
-rw-r--r--   1 bearly  staff       0 Jul 29 19:17 db
-rw-r--r--   1 bearly  staff  159744 Jul 30 18:52 db.sqlite3
drwxr-xr-x  13 bearly  staff     442 Jul 29 23:51 frontend
-rwxr-xr-x   1 bearly  staff     631 Jul 29 18:10 manage.py
 
(capeassignment) bash-3.2$ cd frontend/
 
(capeassignment) bash-3.2$ npm run dev
 
> capeassignment@1.0.0 dev /Users/bearly/capeassignment
> webpack --mode development ./capeproject/frontend/src/index.js  --output ./capeproject/frontend/static/frontend/main.js
 
Hash: 3b320921ebc8c5722e68
Version: webpack 4.44.0
Time: 6230ms
Built at: 07/30/2020 7:01:48 PM
  Asset      Size  Chunks             Chunk Names
main.js  1.91 MiB    main  [emitted]  main
Entrypoint main = main.js
[./capeproject/frontend/src/index.js] 35 bytes {main} [built]
[./capeproject/frontend/static/index.css] 531 bytes {main} [built]
[./node_modules/css-loader/dist/cjs.js!./capeproject/frontend/static/index.css] 1.49 KiB {main} [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
    + 192 hidden modules
```

# Capestart Document Links

[Install Steps](https://docs.google.com/document/d/1kcBjjft-5fayZuXwymx_wiW6CjgvYLKILt3ZDSqsaxQ/edit?usp=sharing) <br/>
[End Points](https://docs.google.com/document/d/1TKcqA4qNIOgHNeTCDWNAyv_WrnHRLo7Z6KYrJFomwUM/edit?usp=sharing) <br/>
[Implementation Plan](https://docs.google.com/document/d/15ku98IwYQ-HC6SAhITKwvS6HtcaCsnpRiDYdAkWzjUE/edit?usp=sharing) <br/>
[API Screenshots](https://docs.google.com/document/d/1pvyF8hxd4PHPj3ck4NqKKI3W0Tw9aU_LG0ibiuot_D0/edit?usp=sharing) <br/>
[Application Screenshots](https://docs.google.com/document/d/1uwOYfX2AIHHrfD6qOU9qHAnGaN6ktV7PGSBc4R8q8-E/edit?usp=sharing) <br/>
[Known Issues](https://docs.google.com/document/d/1FD2uisk3iDfrPp8AgeU6p1XQsL39_MAEJ0yg7-PhOo0/edit?usp=sharing)