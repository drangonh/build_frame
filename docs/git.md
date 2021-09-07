# 分支管理

## 查看所有分支
git branch -a

## 新建分支
* git branch branch_name,仅新建
* git checkout -b branch_name,新建并切换到新分支

## 把本地分支推送到远程仓库
* git push --set-upstream origin branch_name

## 查看本地分之和远程分支的对应关系
* git branch -vv

## 删除分支
* 先删除本地分支:git branch -d branch_name,开始删除分支，删除之前记得切换到别的分支，否则删除不成功
* git push origin --delete branch_name,删除远程分支