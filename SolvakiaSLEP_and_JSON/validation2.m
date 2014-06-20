
%%% LogisticsR
%%% 10 fold cross validation for bi-class %%%
group = length(y);
indices = crossvalind('Kfold',group,10);
meanVector=[];

tic;
for i = 1:10
    i
    test = (indices == i); train = ~test;
%     ATrain=A(train,:);  % Training data
%     yTrain=y(train);    % Training y
%     [xTrain, cTrain, funValTrain, ValueLTrain] = LogisticR(ATrain, yTrain, rho, opts);
    
    ATest = A(test,:);  % Testing data
    yTest = y(test);    % Testing y
    
    cmat = repmat(c,size(ATest,1),1);
    yexp = exp(ATest * x + cmat);
    ypred = yexp ./ (yexp + 1);
    ypredResult = ypred > 0.5;
    ypredResult = double(ypredResult);
    ypredResult(ypredResult==0)=-1;
    accuracy = length(find(ypredResult == yTest)) / length(ypred);
    meanVector = [meanVector;accuracy];    
end
toc;

accuracy = mean(meanVector)