##ruby basic
###Proc vs lambda
```
#lambda 会返回它的调用函数，但 Proc 会结束它所位于的 function
def return_from_proc
  ruby_proc = Proc.new { return "return from a Proc" }
  ruby_proc.call
  return "The function will NOT reach here because a Proc containing a return statement has been called"
end

def return_from_lambda
  ruby_lambda = lambda { return "return from lambda" }
  ruby_lambda.call
  return "The function will reach here"
end

puts return_from_proc # display return from proc
puts return_from_lambda # display The function will reach here
```

##react mobile basic
###fetch
iOS safari/老版本的安卓原装浏览器不支持fetch,要改用whatwg-fetch.

##微信android
###支付/分享问题
要在release版本下测试，获取md5也需要release版本，最后测试微信时候要清空微信客户端缓存.


##Mac开发工具
###Rest Client
insomnia: https://insomnia.rest/
###软件包管理
Cakebrew: The Mac App for Homebrew. https://www.cakebrew.com/
