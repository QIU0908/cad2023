var tipuesearch = {"pages": [{'title': 'homework', 'text': '\n', 'tags': '', 'url': 'homework.html'}, {'title': '繪圖過程', 'text': '\n \n \n 軌道有改', 'tags': '', 'url': '繪圖過程.html'}, {'title': '1.底板', 'text': '\xa0 規格(190*100*22)mm \n \n 與柱子的定位點 \n \n', 'tags': '', 'url': '1.底板.html'}, {'title': '2.柱子', 'text': '規格(Ø5*60)mm \n \n \n', 'tags': '', 'url': '2.柱子.html'}, {'title': '3.盤子', 'text': '剖面左側視圖(單位mm) \n \n 盤子下方導R10圓角 \n \n \n 球飛向盤子的方向做了120°的扇形開槽深13mm \n \n \n \n \n 與柱子和軌道的定位點 \n \n', 'tags': '', 'url': '3.盤子.html'}, {'title': '4.軌道', 'text': '軌道第一版 Ø4圓柱體(已改版) \n \n 第二版應球在軌道上不夠圓滑,故把軌道曲線大部分改成 光滑函數 即可 \n \n 呈現在SOLIDWORKS 2022 \n \n', 'tags': '', 'url': '4.軌道.html'}, {'title': '5.球', 'text': '求直徑Ø10mm \n \n \n', 'tags': '', 'url': '5.球.html'}, {'title': '放入CoppeliaSim過程及模擬', 'text': '\n 當縮放比1時 \n \n \n 其縮放比為0.01看起來比例才會合理 \n \n \n \n \n 模擬影片 \n \n', 'tags': '', 'url': '放入CoppeliaSim過程及模擬.html'}, {'title': 'cmsite放入照片', 'text': '', 'tags': '', 'url': 'cmsite放入照片.html'}, {'title': '方法1.', 'text': 'step1. 啟動並進入動態,選到要插入照片的行數,選擇上方照片圖案 \n \n 之後選擇右邊 \n \n \n step2.按最下方的image upload \n \n step3.選擇檔案 \n \n \n 等到100% \n \n \n step4. \n \n \n \n \n \n', 'tags': '', 'url': '方法1..html'}, {'title': '方法2.(較麻煩)', 'text': '(影片還在想辦法) \n step1.進到github 倉儲位置 \n \n \n step2.找到images(圖片) \n \n \n step3.點進去後右上角 按upload files \n \n \n step4.choose your files \n \n \n step5.按下頁面最下面的commit change \n \n \n step6.git clone 你的github倉儲 \n \xa0 \xa0 \xa0 \xa0 錯誤已經有同檔名資料夾 \n \n \n step7.找到他並刪除 \n \n 如出現 \n \n 記得把運行框cd..退出資料夾 \n \n step8.再git clone 一次(成功) \n \n \n step9.啟動並進入動態,選到要插入照片的行數,選擇上方照片圖案 \n \n 選擇右邊 \n \n \n step10你的檔案就會出現 \n \n \n \n \n \n \n', 'tags': '', 'url': '方法2.(較麻煩).html'}, {'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};