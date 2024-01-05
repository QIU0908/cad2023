var tipuesearch = {"pages": [{'title': 'homework', 'text': '', 'tags': '', 'url': 'homework.html'}, {'title': '專案1.', 'text': '\n', 'tags': '', 'url': '專案1..html'}, {'title': '繪圖過程', 'text': '\n \n \n 軌道有改 \n \n \n 1.底板 \n \xa0 規格(190*100*22)mm \n \n 與柱子的定位點 \n \n 2.柱子 \n 規格(Ø5*60)mm \n \n \n 3.盤子 \n 剖面左側視圖(單位mm) \n \n 盤子下方導R10圓角 \n \n \n 球飛向盤子的方向做了120°的扇形開槽深13mm \n \n \n \n \n 與柱子和軌道的定位點 \n \n 4.軌道 \n 影片在 放入CoppeliaSim過程及模擬影片 \n 軌道第一版 Ø4圓柱體(已改版) \n \n 5.球 \n 直徑Ø10mm \n \n \n', 'tags': '', 'url': '繪圖過程.html'}, {'title': '遇到的問題', 'text': '1. 球與軌道卡一下的問題 \n 可能是球在軌道上不夠圓滑,故把軌道曲線大部分改成 光滑函數 即可 \n \n 呈現在SOLIDWORKS 2022 \n \n 呈現在組合圖 \n \n \n 結果還是一樣 \n \n \n ============================================== \n 2.真正解決球與軌道卡一下的問題 \n \n 解決方法是把用SOLIDWORK畫的球,改成用CoppeliaSim內建的模型做一顆球 \n 原因:可能是 CoppeliaSim對自己內建模型的向性比較好 \n ======================================= \n 3.讓球更自然一些 \n 把球的物件特殊屬性打開即可 \n \n \n', 'tags': '', 'url': '遇到的問題.html'}, {'title': '放入CoppeliaSim過程及模擬影片', 'text': '模擬影片 \n \n \n \n 軌道改版後模擬影片 \n \n \n \n \n 當縮放比1時 \n \n \n 其縮放比為0.01看起來比例才會合理 \n \n \n \n \n \n \n /downloads/製圖過程.htm 專案2. \n \n 製圖過程影片', 'tags': '', 'url': '放入CoppeliaSim過程及模擬影片.html'}, {'title': '有關向心力的模擬與chatgpt討論過程以及完成', 'text': '1.問chatgpt向心力程式前的前置作業 \n \n \n \n 2.與cahtgpt討論向心力程式 \n \n \n \n 3.動力模擬影片 \n \n \n \n # 以下的 zmq 程式庫已經過修改, 可以在 IPv4 與 IPv6 環境下使用\n# 針對 CoppeliaSim 的 zmq 延伸程式, Python 需要安裝 cbor 與 pyzmq 等兩個模組\n# pip install cbor pyzmq\nfrom zmqRemoteApi_IPv6 import RemoteAPIClient\n# 由於在 zmq 程式執行時, 希望讓使用者可以透過鍵盤 (或其他電子電機訊號) 指令控制遠端的機電模擬場景\n# Python 程式環境還需要安裝 keyboard 模組, pip install keyboard\nimport keyboard\n\n# 利用以下程式碼連接 CoppeliaSim remote API server\n#第一個輸入變數若為 localhost 則只能控制與程式同在的場景\n# 但若第一輸入變數為可連外的 IPv4 或 IPv6 address, 則可用來控制遠端電腦上的模擬場景\n# 23000 為 CoppeliaSim 使用 ZMQ remote API 連線控制時內定的網路埠號\n# client 與 server 的防火牆或代理主機必須讓此埠號的封包 (socket) 通過\nclient = RemoteAPIClient(\'localhost\', 23000)\n\n# 利用 getObject 取得場景中的 "sim" 物件參考對應值\nsim = client.getObject(\'sim\')\n\n# 利用 sim 物件的 startSimulation() 方法啟動場景模擬\nsim.startSimulation()\n\n# 利用 getObject 取得 \'marble\' and \'sensor\'  物件的參考對應值\nball = sim.getObject(\'./ball\')\nsensor = sim.getObject(\'./sensor\')\n\n# 透過變數屬性設定方法將 marble 設為 non-static, 意即具有 dynamic 特性\nsim.setObjectInt32Param(ball, sim.shapeintparam_static, 0)\nwhile True:\n    if keyboard.is_pressed(\'q\'):\n        # 按下 \'q\' 停止模擬\n        break\n        \n\n    r, dist, pt, obj, normal = sim.handleProximitySensor(sensor)\n    res, dist2, point, obj2, n = sim.readProximitySensor(sensor)\n    \n    # Get the current position of the ball\n    current_position1 = sim.getObjectPosition(ball, 0)\n\n\n    # 當鋼球碰觸感測器時\n    if res > 0:\n        if current_position1[0] < 1: \n            # 對鋼球質心施加向心力\n            sim.addForceAndTorque(ball, [-470, 0, 90], [0, 0, 0])\n            \n    \n\n\n# Stop the simulation\nsim.stopSimulation()\n\n \n', 'tags': '', 'url': '有關向心力的模擬與chatgpt討論過程以及完成.html'}, {'title': '專案2.', 'text': '過程影片', 'tags': '', 'url': '專案2..html'}, {'title': 'cmsite放入照片', 'text': '', 'tags': '', 'url': 'cmsite放入照片.html'}, {'title': '方法1.', 'text': 'step1. 啟動並進入動態,選到要插入照片的行數,選擇上方照片圖案 \n \n 之後選擇右邊 \n \n \n step2.按最下方的image upload \n \n step3.選擇檔案 \n \n \n 等到100% \n \n \n step4. \n \n \n \n \n \n \n', 'tags': '', 'url': '方法1..html'}, {'title': '方法2.(較麻煩)', 'text': '(影片還在想辦法) \n step1.進到github 倉儲位置 \n \n \n step2.找到images(圖片) \n \n \n step3.點進去後右上角 按upload files \n \n \n step4.choose your files \n \n \n step5.按下頁面最下面的commit change \n \n \n step6.git clone 你的github倉儲 \n \xa0 \xa0 \xa0 \xa0 錯誤已經有同檔名資料夾 \n \n \n step7.找到他並刪除 \n \n 如出現 \n \n 記得把運行框cd..退出資料夾 \n \n step8.再git clone 一次(成功) \n \n \n step9.啟動並進入動態,選到要插入照片的行數,選擇上方照片圖案 \n \n 選擇右邊 \n \n \n step10你的檔案就會出現 \n \n \n \n \n \n \n', 'tags': '', 'url': '方法2.(較麻煩).html'}, {'title': 'About', 'text': 'https://github.com/QIU0908/cad2023 \n \n https://s1511.cycu.org/~cad41123119/cad2023/content/index.html \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};