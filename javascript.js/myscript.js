        
        function originalfunc(num1)
        {
            function newfunc(num2)
            {
                return num1*num2 ;
            }
            return newfunc;
        }
        let myfunction = originalfunc(10);
        alert(myfunction(5));
        alert(myfunction(10));
    